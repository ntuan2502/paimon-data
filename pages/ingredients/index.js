import IngredientsCard from "../../components/ingredients/IngredientCard";
import Head from "next/head";
import GenshinData from "genshin-data";
import Layout from "../../components/layout/Layout";
import { localLocale } from "../../lib/localLocale";
import useTrans from "../../hooks/useTrans";

export default function IngredientsPage({ ingredients }) {
  const trans = useTrans();
  return (
    <div>
      <Head>
        <title>{trans.sidebar.ingredients} | Paimon Data</title>
      </Head>
      <div className="p-2">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
            {ingredients.map((ingredient, index) => (
              <IngredientsCard ingredient={ingredient} key={index} />
              // <a href={`https://genshin-impact.fandom.com/wiki/${ingredient.id}`}>{ingredient.id}</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

IngredientsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getServerSideProps(ctx) {
  const locale = ctx.locale;
  const genshinData = new GenshinData({ language: localLocale(ctx.locale) });
  const ingredients = await genshinData.ingredients();

  return {
    props: {
      ingredients,
    },
  };
}
