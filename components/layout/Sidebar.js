import Link from "next/link";
import { useRouter } from "next/router";
import Language from "./Language";
import { Fragment } from "react";
import { Transition, Menu } from "@headlessui/react";
import useTrans from "../../hooks/useTrans";
import packageInfo from "../../package.json";

function isRoute(route, string) {
  return route.includes(string);
}

export default function Sidebar() {
  const router = useRouter();
  const { locale } = useRouter();
  const trans = useTrans();
  const route = router.route;

  return (
    <div className="relative bg-white dark:bg-gray-800">
      <div className="sticky top-0">
        <div className="flex flex-col sm:flex-row sm:justify-around">
          <div className="w-full lg:w-72 h-screen overflow-auto">
            <div className="flex items-center justify-start mx-6 mt-10">
              <img className="h-10" src={`/images/ui/paimon.png`} />
              <span className="text-gray-600 dark:text-gray-300 ml-4 text-2xl font-bold">
                Paimon Data
              </span>
            </div>
            <div className="flex justify-center items-center pt-5">
              <Menu as="div" className="">
                {({ open }) => (
                  <>
                    <div>
                      <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <img
                          className="h-8 rounded-full"
                          src={`/images/flag/${locale}.bmp`}
                          alt=""
                        />
                        <span className="text-white sr-only">{locale}</span>
                      </Menu.Button>
                    </div>
                    <Transition
                      show={open}
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items
                        static
                        className="origin-top-right absolute right-1/4 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none h-64 overflow-y-scroll"
                      >
                        <Language language="en" />
                        <Language language="chs" />
                        <Language language="cht" />
                        <Language language="fr" />
                        <Language language="de" />
                        <Language language="id" />
                        <Language language="ja" />
                        <Language language="ko" />
                        <Language language="pt" />
                        <Language language="ru" />
                        <Language language="es" />
                        <Language language="th" />
                        <Language language="vi" />
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
              <div className="text-white px-2">v{packageInfo.version}</div>
            </div>

            <nav className="px-6">
              <Link href={"/"}>
                <a
                  className={`hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 ${
                    isRoute(route, "/") && route.length === 1
                      ? "text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600"
                      : "text-gray-600 dark:text-gray-400 rounded-lg"
                  } `}
                >
                  <img className="w-8 h-8" src={`/images/ui/home.png`} alt="" />
                  <span className="mx-4 text-lg font-normal">
                    {trans.sidebar.home}
                  </span>
                  <span className="flex-grow text-right"></span>
                </a>
              </Link>
              <Link href={"/characters"}>
                <a
                  className={`hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 ${
                    isRoute(route, "characters")
                      ? "text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600"
                      : "text-gray-600 dark:text-gray-400 rounded-lg"
                  } `}
                >
                  <img
                    className="w-8 h-8"
                    src={`/images/ui/characters.png`}
                    alt=""
                  />
                  <span className="mx-4 text-lg font-normal">
                    {trans.sidebar.character}
                  </span>
                  <span className="flex-grow text-right"></span>
                </a>
              </Link>
              <Link href={"/artifacts"}>
                <a
                  className={`hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 ${
                    isRoute(route, "artifacts")
                      ? "text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600"
                      : "text-gray-600 dark:text-gray-400 rounded-lg"
                  } `}
                >
                  <img
                    className="w-8 h-8"
                    src={`/images/ui/artifacts.png`}
                    alt=""
                  />
                  <span className="mx-4 text-lg font-normal">
                    {trans.sidebar.artifacts}
                  </span>
                  {/* <span className="flex-grow text-right">
                    <button
                      type="button"
                      className="w-6 h-6 text-xs  rounded-full text-white bg-red-500"
                    >
                      <span className="p-1">7</span>
                    </button>
                  </span> */}
                </a>
              </Link>
              <Link href="/foods">
                <a
                  className={`hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 ${
                    isRoute(route, "foods")
                      ? "text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600"
                      : "text-gray-600 dark:text-gray-400 rounded-lg"
                  } `}
                >
                  <img
                    className="w-8 h-8"
                    src={`/images/ui/foods.png`}
                    alt=""
                  />
                  <span className="mx-4 text-lg font-normal">
                    {trans.sidebar.foods}
                  </span>
                  <span className="flex-grow text-right"></span>
                </a>
              </Link>
              <Link href="/weapons">
                <a
                  className={`hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 ${
                    isRoute(route, "weapons")
                      ? "text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600"
                      : "text-gray-600 dark:text-gray-400 rounded-lg"
                  } `}
                >
                  <img
                    className="w-8 h-8"
                    src={`/images/ui/weapons.png`}
                    alt=""
                  />
                  <span className="mx-4 text-lg font-normal">
                    {trans.sidebar.weapons}
                  </span>
                  <span className="flex-grow text-right"></span>
                </a>
              </Link>
              <Link href="/achievements">
                <a
                  className={`hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 ${
                    isRoute(route, "achievements")
                      ? "text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600"
                      : "text-gray-600 dark:text-gray-400 rounded-lg"
                  } `}
                >
                  <img
                    className="w-8 h-8"
                    src={`/images/ui/achievement.png`}
                    alt=""
                  />
                  <span className="mx-4 text-lg font-normal">
                    {trans.sidebar.achievement}
                  </span>
                  <span className="flex-grow text-right"></span>
                </a>
              </Link>
              <Link href="/potions">
                <a
                  className={`hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 ${
                    isRoute(route, "potions")
                      ? "text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600"
                      : "text-gray-600 dark:text-gray-400 rounded-lg"
                  } `}
                >
                  <img
                    className="w-8 h-8"
                    src={`/images/ui/items.png`}
                    alt=""
                  />
                  <span className="mx-4 text-lg font-normal">
                    {trans.sidebar.potions}
                  </span>
                  <span className="flex-grow text-right"></span>
                </a>
              </Link>
              <Link href="/ingredients">
                <a
                  className={`hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 ${
                    isRoute(route, "ingredients")
                      ? "text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600"
                      : "text-gray-600 dark:text-gray-400 rounded-lg"
                  } `}
                >
                  <img
                    className="w-8 h-8"
                    src={`/images/ui/items.png`}
                    alt=""
                  />
                  <span className="mx-4 text-lg font-normal">
                    {trans.sidebar.ingredients}
                  </span>
                  <span className="flex-grow text-right"></span>
                </a>
              </Link>
              <Link href="/common_materials">
                <a
                  className={`hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 ${
                    isRoute(route, "common_materials")
                      ? "text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600"
                      : "text-gray-600 dark:text-gray-400 rounded-lg"
                  } `}
                >
                  <img
                    className="w-8 h-8"
                    src={`/images/ui/materials.png`}
                    alt=""
                  />
                  <span className="mx-4 text-lg font-normal">
                    {trans.sidebar.common_materials}
                  </span>
                  <span className="flex-grow text-right"></span>
                </a>
              </Link>
              <Link href="/elemental_stone_materials">
                <a
                  className={`hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 ${
                    isRoute(route, "elemental_stone_materials")
                      ? "text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600"
                      : "text-gray-600 dark:text-gray-400 rounded-lg"
                  } `}
                >
                  <img
                    className="w-8 h-8"
                    src={`/images/ui/materials.png`}
                    alt=""
                  />
                  <span className="mx-4 text-lg font-normal">
                    {trans.sidebar.elemental_stone_materials}
                  </span>
                  <span className="flex-grow text-right"></span>
                </a>
              </Link>
              <Link href="/jewels_materials">
                <a
                  className={`hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 ${
                    isRoute(route, "jewels_materials")
                      ? "text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600"
                      : "text-gray-600 dark:text-gray-400 rounded-lg"
                  } `}
                >
                  <img
                    className="w-8 h-8"
                    src={`/images/ui/materials.png`}
                    alt=""
                  />
                  <span className="mx-4 text-lg font-normal">
                    {trans.sidebar.jewels_materials}
                  </span>
                  <span className="flex-grow text-right"></span>
                </a>
              </Link>
              <Link href="/local_materials">
                <a
                  className={`hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 ${
                    isRoute(route, "local_materials")
                      ? "text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600"
                      : "text-gray-600 dark:text-gray-400 rounded-lg"
                  } `}
                >
                  <img
                    className="w-8 h-8"
                    src={`/images/ui/materials.png`}
                    alt=""
                  />
                  <span className="mx-4 text-lg font-normal">
                    {trans.sidebar.local_materials}
                  </span>
                  <span className="flex-grow text-right"></span>
                </a>
              </Link>
              <Link href="/talent_lvl_up_materials">
                <a
                  className={`hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 ${
                    isRoute(route, "talent_lvl_up_materials")
                      ? "text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600"
                      : "text-gray-600 dark:text-gray-400 rounded-lg"
                  } `}
                >
                  <img
                    className="w-8 h-8"
                    src={`/images/ui/materials.png`}
                    alt=""
                  />
                  <span className="mx-4 text-lg font-normal">
                    {trans.sidebar.talent_lvl_up_materials}
                  </span>
                  <span className="flex-grow text-right"></span>
                </a>
              </Link>
              <Link href="/weapon_materials">
                <a
                  className={`hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 ${
                    isRoute(route, "weapon_materials")
                      ? "text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600"
                      : "text-gray-600 dark:text-gray-400 rounded-lg"
                  } `}
                >
                  <img
                    className="w-8 h-8"
                    src={`/images/ui/materials.png`}
                    alt=""
                  />
                  <span className="mx-4 text-lg font-normal">
                    {trans.sidebar.weapon_materials}
                  </span>
                  <span className="flex-grow text-right"></span>
                </a>
              </Link>
              <Link href="/baits">
                <a
                  className={`hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 ${
                    isRoute(route, "baits")
                      ? "text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600"
                      : "text-gray-600 dark:text-gray-400 rounded-lg"
                  } `}
                >
                  <img
                    className="w-8 h-8"
                    src={`/images/ui/items.png`}
                    alt=""
                  />
                  <span className="mx-4 text-lg font-normal">
                    {trans.sidebar.baits}
                  </span>
                  <span className="flex-grow text-right"></span>
                </a>
              </Link>
              <Link href="/fishes">
                <a
                  className={`hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 ${
                    isRoute(route, "fishes")
                      ? "text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600"
                      : "text-gray-600 dark:text-gray-400 rounded-lg"
                  } `}
                >
                  <img
                    className="w-8 h-8"
                    src={`/images/ui/items.png`}
                    alt=""
                  />
                  <span className="mx-4 text-lg font-normal">
                    {trans.sidebar.fishes}
                  </span>
                  <span className="flex-grow text-right"></span>
                </a>
              </Link>
              <Link href="/fishing_rods">
                <a
                  className={`hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 ${
                    isRoute(route, "fishing_rods")
                      ? "text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600"
                      : "text-gray-600 dark:text-gray-400 rounded-lg"
                  } `}
                >
                  <img
                    className="w-8 h-8"
                    src={`/images/ui/items.png`}
                    alt=""
                  />
                  <span className="mx-4 text-lg font-normal">
                    {trans.sidebar.fishing_rods}
                  </span>
                  <span className="flex-grow text-right"></span>
                </a>
              </Link>
            </nav>
            {/* <div className="absolute bottom-0 my-10">
              <a
                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-200 flex items-center py-2 px-8"
                href="#"
              >
                <svg
                  width="20"
                  fill="currentColor"
                  height="20"
                  className="h-5 w-5"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z"></path>
                </svg>
                <span className="mx-4 font-medium">v2.4.0</span>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
