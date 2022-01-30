import FishingRodCard from "../../components/fishingRods/FishingRodCard";
import Head from "next/head";
import GenshinData from "genshin-data";
import Layout from "../../components/layout/Layout";
import { localLocale } from "../../lib/localLocale";
import useTrans from "../../hooks/useTrans";

export default function FishingRodsPage({ fishingRods }) {
  const trans = useTrans();
  return (
    <div>
      <Head>
        <title>{trans.sidebar.fishing_rods} | Paimon Data</title>
      </Head>
      <div className="p-2">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
            {fishingRods.map((fishingRod, index) => (
              <FishingRodCard fishingRod={fishingRod} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
FishingRodsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export async function getServerSideProps(ctx) {
  const locale = ctx.locale;
  const genshinData = new GenshinData({ language: localLocale(ctx.locale) });
  const fishingRods = await genshinData.fishingRods();

  return {
    props: {
      fishingRods,
    },
  };
}
