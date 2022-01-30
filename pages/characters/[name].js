import CharacterBackground from "../../components/character/CharacterBackground";
import CharacterConstellation from "../../components/character/CharacterConstellation";
import CharacterSkill from "../../components/character/CharacterSkill";
import CharacterPassive from "../../components/character/CharacterPassive";
import CharacterAscension from "../../components/character/CharacterAscension";
import CharacterTalentMaterials from "../../components/character/CharacterTalentMaterials";
import Head from "next/head";
import GenshinData from "genshin-data";
import Layout from "../../components/layout/Layout";
import { localLocale } from "../../lib/localLocale";
import useTrans from "../../hooks/useTrans";

export default function CharacterDetailPage({ character, region, basePath }) {
  const trans = useTrans();
  return (
    <div>
      <Head>
        <title>Genshin | {character.name}</title>
        <meta
          itemProp="name"
          content={`${character.name} - ${character.title}`}
        />
        <meta itemProp="description" content={character.description} />
        <meta
          itemProp="image"
          content={`${basePath}/images/characters/backgrounds/${character.id}.png`}
        />

        <meta
          itemProp="name"
          content={`${character.name} - ${character.title}`}
        />
        <meta itemProp="description" content={character.description} />
        <meta
          itemProp="image"
          content={`${basePath}/images/characters/backgrounds/${character.id}.png`}
        />

        <meta property="og:url" content="https://paimon.vercel.app" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`${character.name} - ${character.title}`}
        />
        <meta property="og:description" content={character.description} />
        <meta
          property="og:image"
          content={`${basePath}/images/characters/backgrounds/${character.id}.png`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${character.name} - ${character.title}`}
        />
        <meta name="twitter:description" content={character.description} />
        <meta
          name="twitter:image"
          content={`${basePath}/images/characters/backgrounds/${character.id}.png`}
        />
      </Head>
      <div className="py-5 px-8">
        <div className="bg-white flex flex-row flex-wrap">
          <div className="mx-auto w-full">
            <CharacterBackground character={character} region={region} />
            <br />
            <div className="font-bold text-3xl border-b-2 pb-2">
              {trans.characters.ascensionMaterial}
            </div>
            <CharacterAscension ascension={character.ascension} />
            <div className="font-bold text-3xl border-b-2 pb-2">
              {trans.characters.talentBook}
            </div>
            <CharacterTalentMaterials
              id={character.id}
              talent_materials={character.talent_materials}
            />
            <div className="font-bold text-3xl border-b-2 pb-2">
              {trans.characters.talents}
            </div>
            <CharacterSkill id={character.id} skills={character.skills} />
            <div className="font-bold text-3xl border-b-2 pb-2">
              {trans.characters.passiveTalents}
            </div>
            <CharacterPassive id={character.id} passives={character.passives} />
            <div className="font-bold text-3xl border-b-2 pb-2">
              {trans.characters.constellations}
            </div>
            <CharacterConstellation
              id={character.id}
              constellations={character.constellations}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const genshinData = new GenshinData({ language: localLocale(ctx.locale) });
  const characters = await genshinData.characters();
  const character = characters.find((c) => c.id === ctx.params.name);

  const genshinData1 = new GenshinData();
  const characters1 = await genshinData1.characters();
  const character1 = characters1.find((c) => c.id === ctx.params.name);
  var region = "Mondstadt";
  if (character1.region) region = character1.region;

  const basePath =
    "https://raw.githubusercontent.com/ntuan2502/paimon-data/main/public";

  return {
    props: {
      character,
      region,
      basePath,
    },
  };
}

CharacterDetailPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
