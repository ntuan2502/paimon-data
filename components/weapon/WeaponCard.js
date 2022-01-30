import Link from "next/link";
import { useState, useEffect } from "react";
import { Star } from "../../lib/lib";

function replaceMarkup(markup) {
  var temp = markup;
  temp = temp.replace(/<span>/g, '<span style="color:blue;">');
  return { __html: temp };
}
export default function WeaponCard({ weapon }) {
  const [weaponState, setWeaponState] = useState(1);
  const [level, setLevel] = useState(0);

  useEffect(() => {
    setWeaponState(1);
    if (level > weapon.ascensions.length) {
      setLevel(0);
    }
  }, [weapon]);

  return (
    <div className="w-96 hover:shadow-xl">
      <Link href={`/weapons/${weapon.id}`}>
        <a>
          <div
            className={`cursor-pointer relative bg-gradient-to-r ${
              weapon.rarity == 1 ? "from-gray-500 to-gray-300" : ""
            }${weapon.rarity == 2 ? "from-green-500 to-green-300" : ""}${
              weapon.rarity == 3 ? "from-blue-500 to-blue-300" : ""
            }${weapon.rarity == 4 ? "from-purple-500 to-purple-300" : ""} ${
              weapon.rarity == 5 ? "from-yellow-500 to-yellow-300" : ""
            } w-96 `}
          >
            <div
              className={`text-xl text-white ${
                weapon.rarity == 1 ? "bg-gray-500" : ""
              }${weapon.rarity == 2 ? "bg-green-500" : ""}${
                weapon.rarity == 3 ? "bg-blue-500" : ""
              }${weapon.rarity == 4 ? "bg-purple-500" : ""}${
                weapon.rarity == 5 ? "bg-yellow-500" : ""
              } font-semibold px-5 py-3`}
            >
              {weapon.name}
            </div>
            <img
              className="w-40 h-auto float-right p-2"
              src={`/images/weapons/weapon_${weapon.id}${
                level == weapon.ascensions.length ? "_2nd" : ""
              }.webp`}
            />
            <p className="text-md text-white font-bold px-5 pt-1">
              {weapon.type}
            </p>
            {weapon.stats.secondary ? (
              <div>
                <p className="text-md text-white font-semibold px-5">
                  {weapon.stats.secondary}
                </p>
                <p className="text-md text-white font-bold px-5">
                  {level == 0 &&
                    weapon.stats.levels[0] &&
                    weapon.stats.levels[0].secondary}
                  {level == 1 &&
                    weapon.stats.levels[1] &&
                    weapon.stats.levels[1].secondary}
                  {level == 2 &&
                    weapon.stats.levels[3] &&
                    weapon.stats.levels[3].secondary}
                  {level == 3 &&
                    weapon.stats.levels[5] &&
                    weapon.stats.levels[5].secondary}
                  {level == 4 &&
                    weapon.stats.levels[7] &&
                    weapon.stats.levels[7].secondary}
                  {level == 5 &&
                    weapon.stats.levels[9] &&
                    weapon.stats.levels[9].secondary}
                  {level == 6 &&
                    weapon.stats.levels[11] &&
                    weapon.stats.levels[11].secondary}
                  {level == 7 &&
                    weapon.stats.levels[13] &&
                    weapon.stats.levels[13].secondary}
                </p>
              </div>
            ) : (
              <div>
                <p className="text-md text-white font-semibold px-5">-</p>
                <p className="text-md text-white font-bold px-5">-</p>
              </div>
            )}
            <p className="text-md text-white font-semibold px-5">
              {weapon.stats.primary}
            </p>
            <p className="text-4xl text-white font-bold px-5">
              {level == 0 &&
                weapon.stats.levels[0] &&
                weapon.stats.levels[0].primary}
              {level == 1 &&
                weapon.stats.levels[1] &&
                weapon.stats.levels[1].primary}
              {level == 2 &&
                weapon.stats.levels[3] &&
                weapon.stats.levels[3].primary}
              {level == 3 &&
                weapon.stats.levels[5] &&
                weapon.stats.levels[5].primary}
              {level == 4 &&
                weapon.stats.levels[7] &&
                weapon.stats.levels[7].primary}
              {level == 5 &&
                weapon.stats.levels[9] &&
                weapon.stats.levels[9].primary}
              {level == 6 &&
                weapon.stats.levels[11] &&
                weapon.stats.levels[11].primary}
              {level == 7 &&
                weapon.stats.levels[13] &&
                weapon.stats.levels[13].primary}
            </p>
            <div className="px-5 pt-0 py-1">
              <Star rarity={weapon.rarity} />
            </div>

            <div className="border-t-2 border-black"></div>
          </div>
        </a>
      </Link>
      <div className="bg-gray-200 pb-3 text-lg">
        <div className="font-semibold px-5 py-1 flex items-center text-white bg-gray-700">
          <div className="px-1">
            Level {level == 0 && "01"}
            {level == 1 && weapon.ascensions[0] && weapon.ascensions[0].level}
            {level == 2 && weapon.ascensions[1] && weapon.ascensions[1].level}
            {level == 3 && weapon.ascensions[2] && weapon.ascensions[2].level}
            {level == 4 && weapon.ascensions[3] && weapon.ascensions[3].level}
            {level == 5 && weapon.ascensions[4] && weapon.ascensions[4].level}
            {level == 6 && weapon.ascensions[5] && weapon.ascensions[5].level}
            {level == 7 && weapon.ascensions[6] && weapon.ascensions[6].level}/
            {weapon.ascensions[weapon.ascensions.length - 1].level}
          </div>
          <div className="px-1">
            <svg
              onClick={
                level > 0 ? () => setLevel(level - 1) : () => setLevel(level)
              }
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="px-1">
            <svg
              onClick={
                level < weapon.ascensions.length
                  ? () => setLevel(level + 1)
                  : () => setLevel(level)
              }
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
        {weapon.refinements.length > 0 && (
          <div className="text-white flex justify-around pt-3">
            <div
              onClick={() => setWeaponState(1)}
              className={`${
                weaponState == 1 ? "bg-red-500" : "bg-green-500"
              } hover:bg-red-700 rounded-full w-16 cursor-pointer text-center`}
            >
              1
            </div>
            <div
              onClick={() => setWeaponState(2)}
              className={`${
                weaponState == 2 ? "bg-red-500" : "bg-green-500"
              } hover:bg-red-700 rounded-full w-16 cursor-pointer text-center`}
            >
              2
            </div>
            <div
              onClick={() => setWeaponState(3)}
              className={`${
                weaponState == 3 ? "bg-red-500" : "bg-green-500"
              } hover:bg-red-700 rounded-full w-16 cursor-pointer text-center`}
            >
              3
            </div>
            <div
              onClick={() => setWeaponState(4)}
              className={`${
                weaponState == 4 ? "bg-red-500" : "bg-green-500"
              } hover:bg-red-700 rounded-full w-16 cursor-pointer text-center`}
            >
              4
            </div>
            <div
              onClick={() => setWeaponState(5)}
              className={`${
                weaponState == 5 ? "bg-red-500" : "bg-green-500"
              } hover:bg-red-700 rounded-full w-16 cursor-pointer text-center`}
            >
              5
            </div>
          </div>
        )}

        {weapon.passive != "" && (
          <div className="font-bold px-5 pt-3">{weapon.passive}</div>
        )}

        {weapon.refinements.length > 0 && (
          <div className="font-bold px-5 py-0">
            {weapon.refinements[0] && weaponState == 1 && (
              <div
                dangerouslySetInnerHTML={replaceMarkup(
                  weapon.refinements[0].desc
                )}
              />
            )}
            {weapon.refinements[1] && weaponState == 2 && (
              <div
                dangerouslySetInnerHTML={replaceMarkup(
                  weapon.refinements[1].desc
                )}
              />
            )}
            {weapon.refinements[2] && weaponState == 3 && (
              <div
                dangerouslySetInnerHTML={replaceMarkup(
                  weapon.refinements[2].desc
                )}
              />
            )}
            {weapon.refinements[3] && weaponState == 4 && (
              <div
                dangerouslySetInnerHTML={replaceMarkup(
                  weapon.refinements[3].desc
                )}
              />
            )}
            {weapon.refinements[4] && weaponState == 5 && (
              <div
                dangerouslySetInnerHTML={replaceMarkup(
                  weapon.refinements[4].desc
                )}
              />
            )}
          </div>
        )}

        <div className="font-semibold px-5 py-3">{weapon.description}</div>
      </div>
    </div>
  );
}
