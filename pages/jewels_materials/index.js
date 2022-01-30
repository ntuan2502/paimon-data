import JewelsMaterialCard from "../../components/jewelsMaterials/JewelsMaterialCard";
import Head from "next/head";
import GenshinData from "genshin-data";
import Layout from "../../components/layout/Layout";
import { localLocale } from "../../lib/localLocale";
import useTrans from "../../hooks/useTrans";

export default function JewelsMaterialsPage({ jewelsMaterials }) {
  const trans = useTrans();
  return (
    <div>
      <Head>
        <title>{trans.sidebar.jewels_materials} | Paimon Data</title>
      </Head>
      <div className="p-2">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
            {jewelsMaterials
              .sort((a, b) => (a.rarity > b.rarity ? -1 : 1))
              .map((jewelsMaterial, index) => (
                <JewelsMaterialCard
                  jewelsMaterial={jewelsMaterial}
                  key={index}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
JewelsMaterialsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export async function getServerSideProps(ctx) {
  const locale = ctx.locale;
  const genshinData = new GenshinData({ language: localLocale(ctx.locale) });
  const jewelsMaterials = await genshinData.jewelsMaterials();

  return {
    props: {
      jewelsMaterials,
    },
  };
}
