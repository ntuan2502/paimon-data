import CommonMaterialCard from "../../components/commonMaterials/CommonMaterialCard";
import Head from "next/head";
import GenshinData from "genshin-data";
import Layout from "../../components/layout/Layout";
import { localLocale } from "../../lib/localLocale";

export default function CommonMaterialsPage({ commonMaterials }) {
  return (
    <div>
      <Head>
        <title>Genshin | Common Materials</title>
      </Head>
      <div className="p-2">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
            {commonMaterials
              .sort((a, b) => (a.rarity > b.rarity ? -1 : 1))
              .map((commonMaterial, index) => (
                <CommonMaterialCard
                  commonMaterial={commonMaterial}
                  key={index}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
CommonMaterialsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export async function getServerSideProps(ctx) {
  const locale = ctx.locale;
  const genshinData = new GenshinData({ language: localLocale(ctx.locale) });
  const commonMaterials = await genshinData.commonMaterials();

  return {
    props: {
      commonMaterials,
    },
  };
}
