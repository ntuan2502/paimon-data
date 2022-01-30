import Head from "next/head";
import WeaponCard from "../../components/weapon/WeaponCard";
import WeaponAscension from "../../components/weapon/WeaponAscension";
import GenshinData from "genshin-data";
import Layout from "../../components/layout/Layout";
import { localLocale } from "../../lib/localLocale";
import useTrans from "../../hooks/useTrans";

export default function WeaponDetailPage({ weapon, basePath }) {
  const trans = useTrans();
  return (
    <div>
      <Head>
        <title>Genshin | {weapon.name}</title>
        <meta itemProp="name" content={weapon.name} />
        <meta itemProp="description" content={weapon.description} />
        <meta
          itemProp="image"
          content={`${basePath}/img/weapons/weapon_${weapon.id}.webp`}
        />

        <meta itemProp="name" content={weapon.name} />
        <meta itemProp="description" content={weapon.description} />
        <meta
          itemProp="image"
          content={`${basePath}/img/weapons/weapon_${weapon.id}.webp`}
        />

        <meta property="og:url" content="https://paimon.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={weapon.name} />
        <meta property="og:description" content={weapon.description} />
        <meta
          property="og:image"
          content={`${basePath}/img/weapons/weapon_${weapon.id}.webp`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={weapon.name} />
        <meta name="twitter:description" content={weapon.description} />
        <meta
          name="twitter:image"
          content={`${basePath}/img/weapons/weapon_${weapon.id}.webp`}
        />
      </Head>
      <div className="p-2">
        <div className="flex items-center justify-center">
          <WeaponCard weapon={weapon} />
        </div>
        <div className="bg-white flex flex-row flex-wrap p-5 ">
          <div className="mx-auto w-full">
            <div className="font-bold text-3xl border-b-2 pb-2">
              {trans.weapon.ascensionMaterial}
            </div>
            <WeaponAscension ascensions={weapon.ascensions} />
          </div>
        </div>
      </div>
    </div>
  );
}

WeaponDetailPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getServerSideProps(ctx) {
  const { locale, params } = ctx;
  const genshinData = new GenshinData({ language: localLocale(ctx.locale) });
  const weapons = await genshinData.weapons();
  const weapon = weapons.find((c) => c.id === params.name);

  const basePath =
    "https://raw.githubusercontent.com/ntuan2502/paimon-data/main/public";

  return {
    props: {
      weapon,
      basePath,
    },
  };
}
