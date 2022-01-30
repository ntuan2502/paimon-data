import BaitCard from "../../components/baits/BaitCard";
import Head from "next/head";
import GenshinData from "genshin-data";
import Layout from "../../components/layout/Layout";
import { localLocale } from "../../lib/localLocale";
import useTrans from "../../hooks/useTrans";

export default function BaitsPage({ baits }) {
  const trans = useTrans();
  return (
    <div>
      <Head>
        <title>{trans.sidebar.baits} | Paimon Data</title>
      </Head>
      <div className="p-2">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
            {baits.map((bait, index) => (
              <BaitCard bait={bait} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
BaitsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export async function getServerSideProps(ctx) {
  const locale = ctx.locale;
  const genshinData = new GenshinData({ language: localLocale(ctx.locale) });
  const baits = await genshinData.baits();

  return {
    props: {
      baits,
    },
  };
}
