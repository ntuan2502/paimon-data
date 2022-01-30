import GenshinData from "genshin-data";
import Head from "next/head";
import { useState } from "react";
import Layout from "../../components/layout/Layout";
import useTrans from "../../hooks/useTrans";
import { localLocale } from "../../lib/localLocale";

export default function AchievementsPage({ achievements }) {
  const trans = useTrans();
  const [selected, setSelected] = useState(0);
  return (
    <>
      <Head>
      <title>{trans.sidebar.achievement} | Paimon Data</title>
      </Head>
      <div className="flex p-2 sm:p-5">
        <div className="min-w-[120px] max-w-[120px] sm:min-w-[192px] sm:max-w-[384px] h-[95vh] overflow-auto">
          {achievements
            .sort((a, b) => (a.order < b.order ? -1 : 1))
            .map((achievement, key) => (
              <div
                key={key}
                onClick={() => setSelected(key)}
                className={`border-2 hover:text-white hover:bg-yellow-600 ${
                  key == selected && "bg-green-500 text-white"
                }`}
              >
                <div className="flex flex-col sm:flex-row items-center cursor-pointer">
                  <img
                    className="w-full sm:w-20 bg-gray-700"
                    src={`/images/achievements/achievement_${achievement.id}.webp`}
                    alt=""
                  />
                  <div className="px-2 font-bold w-full">
                    {achievement.name}
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="sm:px-5 h-[95vh] overflow-auto">
          {achievements[selected].achievements
            .sort((a, b) => (a.order < b.order ? -1 : 1))
            .map((item, key) => (
              <div
                key={key}
                className="flex flex-col relative sm:flex-row sm:items-center border-2 hover:bg-yellow-600 hover:text-white"
              >
                <img
                  className="w-20 px-2 flex"
                  src={`/images/ui/achievements.png`}
                  alt=""
                />
                <div className="px-2 sm:w-[100vh]">
                  <div className="font-bold">{item.name}</div>
                  <div className="">{item.desc}</div>
                </div>
                <div className="px-5 absolute top-3 right-3 sm:static">
                  <div className="flex justify-center item-center">
                    <img
                      className="w-10"
                      src={`/images/ui/primogem.png`}
                      alt=""
                    />
                  </div>
                  <div className="font-bold w-12 flex justify-center item-center">
                    {item.reward}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const genshinData = new GenshinData({ language: localLocale(ctx.locale) });
  const achievements = await genshinData.achievements();

  return {
    props: {
      achievements,
    },
  };
}

AchievementsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
