import WeaponCard from "../../components/weapon/WeaponCard";
import Head from "next/head";
import GenshinData from "genshin-data";
import Layout from "../../components/layout/Layout";
import { useState } from "react";
import { localLocale } from "../../lib/localLocale";
import useTrans from "../../hooks/useTrans";

export default function WeaponsPage({ weapons }) {
  const [search, setSearch] = useState("");
  const trans = useTrans();
  return (
    <div>
      <Head>
        <title>{trans.sidebar.weapons} | Paimon Data</title>
      </Head>
      <div className="p-2">
        <div className="flex justify-center items-center mx-auto pb-5">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search... "
            className="w-96 py-2 border-b-2 border-gray-600 outline-none focus:border-green-400"
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
            {weapons
              .filter(
                (weapon) =>
                  weapon.name.toLowerCase().includes(search) ||
                  weapon.description.toLowerCase().includes(search) ||
                  weapon.bonus.toLowerCase().includes(search) ||
                  weapon.domain.toLowerCase().includes(search) ||
                  weapon.type.toLowerCase().includes(search) ||
                  weapon.stats.primary.toLowerCase().includes(search) ||
                  weapon.stats.secondary?.toLowerCase().includes(search) ||
                  weapon.passive.toLowerCase().includes(search)
              )
              .map((weapon, index) => (
                <WeaponCard weapon={weapon} key={index} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

WeaponsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getServerSideProps(ctx) {
  const locale = ctx.locale;
  const genshinData = new GenshinData({ language: localLocale(ctx.locale) });
  const weapons = await genshinData.weapons();

  return {
    props: {
      weapons,
    },
  };
}
