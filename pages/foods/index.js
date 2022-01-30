import FoodCard from "../../components/food/FoodCard";
import Head from "next/head";
import GenshinData from "genshin-data";
import Layout from "../../components/layout/Layout";
import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { localLocale } from "../../lib/localLocale";
import useTrans from "../../hooks/useTrans";

export default function FoodsPage({ foods }) {
  const types = ["ALL", "SPECIAL", "ATK", "DEF", "RECOVERY", "ADVENTURE"];
  const [selected, setSelected] = useState("ALL");
  const [search, setSearch] = useState("");
  const [newFoods, setNewFoods] = useState(foods);
  useEffect(() => {
    foods = foods
      .filter(
        (food) =>
          (selected.toLowerCase().includes(types[1].toLowerCase()) &&
            food.results.special) ||
          selected.toLowerCase().includes(types[0].toLowerCase()) ||
          (selected.toLowerCase().includes(types[2].toLowerCase()) &&
            food.type.toLowerCase().includes(selected.toLocaleLowerCase())) ||
          (selected.toLowerCase().includes(types[3].toLowerCase()) &&
            food.type.toLowerCase().includes(selected.toLocaleLowerCase())) ||
          (selected.toLowerCase().includes(types[4].toLowerCase()) &&
            food.type.toLowerCase().includes(selected.toLocaleLowerCase())) ||
          (selected.toLowerCase().includes(types[5].toLowerCase()) &&
            food.type.toLowerCase().includes(selected.toLocaleLowerCase()))
      )
      .filter(
        (food) =>
          food.name.toLowerCase().includes(search) ||
          food.dish_type.toLowerCase().includes(search) ||
          food.description.toLowerCase().includes(search) ||
          food.results.normal.effect.toLowerCase().includes(search) ||
          food.results.normal.description.toLowerCase().includes(search) ||
          food.results.special?.character.name.toLowerCase().includes(search)
      );
    setNewFoods(foods);
  }, [selected, search]);
  const trans = useTrans();
  return (
    <div>
      <Head>
        <title>{trans.sidebar.foods} | Paimon Data</title>
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
          <div className="px-4 w-72 z-10">
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                  <span className="block truncate">{selected}</span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon
                      className="w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {types.map((type, key) => (
                      <Listbox.Option
                        key={key}
                        className={({ active }) =>
                          `${
                            active
                              ? "text-amber-900 bg-amber-100"
                              : "text-gray-900"
                          }
                          cursor-default select-none relative py-2 pl-10 pr-4`
                        }
                        value={type}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={`${
                                selected ? "font-medium" : "font-normal"
                              } block truncate`}
                            >
                              {type}
                            </span>
                            {selected && (
                              <span
                                className={`${
                                  active ? "text-amber-600" : "text-amber-600"
                                }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                              >
                                <CheckIcon
                                  className="w-5 h-5"
                                  aria-hidden="true"
                                />
                              </span>
                            )}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
            {newFoods.map((food, index) => (
              <FoodCard food={food} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

FoodsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getServerSideProps(ctx) {
  const locale = ctx.locale;
  const genshinData = new GenshinData({ language: localLocale(ctx.locale) });
  const foods = await genshinData.food();

  const genshinData1 = new GenshinData({ language: "english" });
  const englishFoods = await genshinData1.food();

  foods.forEach((food, key) => {
    food.type = englishFoods[key].dish_type;
    if (food.results.special) {
      food.results.special.id = englishFoods[key].results.special.name;
    }
  });

  return {
    props: {
      foods,
    },
  };
}
