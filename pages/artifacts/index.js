import GenshinData from "genshin-data";
import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layout/Layout";
import ArtifactCard from "../../components/artifact/ArtifactCard";
import { useState } from "react";
import { localLocale } from "../../lib/localLocale";
import useTrans from "../../hooks/useTrans";

export default function ArtifactsPage({ artifacts }) {
  const trans = useTrans();
  const [search, setSearch] = useState("");
  return (
    <div>
      <Head>
        <title>{trans.sidebar.artifacts} | Paimon Data</title>
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
            {artifacts
              .filter(
                (artifact) =>
                  artifact.name.toLowerCase().includes(search) ||
                  artifact?.one_pc?.toLowerCase().includes(search) ||
                  artifact?.two_pc?.toLowerCase().includes(search) ||
                  artifact?.four_pc?.toLowerCase().includes(search)
              )
              .sort((a, b) => (a.max_rarity > b.max_rarity ? -1 : 1))
              .map((artifact, index) => (
                <ArtifactCard artifact={artifact} key={index} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const genshinData = new GenshinData({ language: localLocale(ctx.locale) });
  const artifacts = await genshinData.artifacts();

  return {
    props: {
      artifacts,
    },
  };
}

ArtifactsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
