import Layout from "../../components/layout/Layout";
import Head from "next/head";
import GenshinData from "genshin-data";
import { useState } from "react";
import CharacterCard from "../../components/character/CharacterCard";
import { localLocale } from "../../lib/localLocale";
import useTrans from "../../hooks/useTrans";

export default function CharacterPage({ characters }) {
  const trans = useTrans();
  const [search, setSearch] = useState("");
  return (
    <div>
      <Head>
      <title>{trans.sidebar.character} | Paimon Data</title>
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
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 2xl:grid-cols-3">
            <CharacterCard
              id="yae_miko"
              name="Yae Miko"
              rarity="5"
              disabled={true}
            />
            <CharacterCard
              id="kamisato_ayato"
              name="Kamisato Ayato"
              rarity="5"
              disabled={true}
            />
            {characters
              .filter((character) =>
                character.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((character, key) => (
                <div key={key}>
                  <CharacterCard
                    id={character.id}
                    name={character.name}
                    rarity={character.rarity || 5}
                    disabled={false}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const genshinData = new GenshinData({ language: localLocale(ctx.locale) });
  const characters = await genshinData.characters();

  return {
    props: {
      characters,
    },
  };
}

CharacterPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
