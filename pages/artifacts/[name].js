import Head from "next/head";
import GenshinData from "genshin-data";
import { localLocale } from "../../lib/localLocale";
import Layout from "../../components/layout/Layout";
import ArtifactCardDetail from "../../components/artifact/ArtifactCardDetail";

export default function ArtifactDetailPage({ artifact }) {
  return (
    <div>
      <Head>
        <title>Genshin | {artifact.name}</title>
      </Head>
      <div className="p-5">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
            {artifact.flower && (
              <ArtifactCardDetail artifact={artifact} details="flower" />
            )}
            {artifact.plume && (
              <ArtifactCardDetail artifact={artifact} details="plume" />
            )}
            {artifact.sands && (
              <ArtifactCardDetail artifact={artifact} details="sands" />
            )}
            {artifact.goblet && (
              <ArtifactCardDetail artifact={artifact} details="goblet" />
            )}
            {artifact.circlet && (
              <ArtifactCardDetail artifact={artifact} details="circlet" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const { params } = ctx;
  const genshinData = new GenshinData({ language: localLocale(ctx.locale) });
  const artifacts = await genshinData.artifacts();
  const artifact = artifacts.find((c) => c.id === params.name);
  return {
    props: {
      artifact,
    },
  };
}

ArtifactDetailPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
