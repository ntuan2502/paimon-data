import WeaponMaterialCard from "../../components/WeaponMaterials/WeaponMaterialCard";
import Head from "next/head";
import GenshinData from "genshin-data";
import Layout from "../../components/layout/Layout";
import { localLocale } from "../../lib/localLocale";

export default function WeaponMaterialsPage({
  weaponPrimaryMaterials,
  weaponSecondaryMaterials,
}) {
  return (
    <div>
      <Head>
        <title>Genshin | Weapon Materials</title>
      </Head>
      <div className="p-2">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
            {weaponPrimaryMaterials.map((weaponMaterial, index) => (
              <WeaponMaterialCard weaponMaterial={weaponMaterial} key={index} />
            ))}
            {weaponSecondaryMaterials.map((weaponMaterial, index) => (
              <WeaponMaterialCard weaponMaterial={weaponMaterial} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
WeaponMaterialsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export async function getServerSideProps(ctx) {
  const locale = ctx.locale;
  const genshinData = new GenshinData({ language: localLocale(ctx.locale) });
  const weaponPrimaryMaterials = await genshinData.weaponPrimaryMaterials();
  const weaponSecondaryMaterials = await genshinData.weaponSecondaryMaterials();

  return {
    props: {
      weaponPrimaryMaterials,
      weaponSecondaryMaterials,
    },
  };
}
