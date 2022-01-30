import TalentLvlUpMaterialCard from "../../components/talentLvlUpMaterials/TalentLvlUpMaterialCard";
import Head from "next/head";
import GenshinData from "genshin-data";
import Layout from "../../components/layout/Layout";
import { localLocale } from "../../lib/localLocale";

export default function TalentLvlUpMaterialsPage({ talentLvlUpMaterials }) {
  return (
    <div>
      <Head>
        <title>Genshin | Talent Lvl Up Materials</title>
      </Head>
      <div className="p-2">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
            {talentLvlUpMaterials
              .sort((a, b) => (a.rarity > b.rarity ? -1 : 1))
              .map((talentLvlUpMaterial, index) => (
                <TalentLvlUpMaterialCard
                  talentLvlUpMaterial={talentLvlUpMaterial}
                  key={index}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
TalentLvlUpMaterialsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export async function getServerSideProps(ctx) {
  const locale = ctx.locale;
  const genshinData = new GenshinData({ language: localLocale(ctx.locale) });
  const talentLvlUpMaterials = await genshinData.talentLvlUpMaterials();

  return {
    props: {
      talentLvlUpMaterials,
    },
  };
}
