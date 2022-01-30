// import Link from "next/link";
// import { useState } from "react";
import { Star } from "../../lib/lib";

export default function PotionCard({ potion }) {
  return (
    <div className="w-96 hover:shadow-xl ">
      <div
        className={`relative ${potion.rarity == 1 ? "bg-gray-400" : ""}${
          potion.rarity == 2 ? "bg-green-400" : ""
        }${potion.rarity == 3 ? "bg-blue-400" : ""}${
          potion.rarity == 4 ? "bg-purple-400" : ""
        } ${potion.rarity == 5 ? "bg-yellow-400" : ""} w-96 `}
      >
        <div
          className={`text-xl text-white ${
            potion.rarity == 1 ? "bg-gray-500" : ""
          }${potion.rarity == 2 ? "bg-green-500" : ""}${
            potion.rarity == 3 ? "bg-blue-500" : ""
          }${potion.rarity == 4 ? "bg-purple-500" : ""}${
            potion.rarity == 5 ? "bg-yellow-500" : ""
          } font-semibold px-5 py-3`}
        >
          <div>{potion.name}</div>
        </div>
        <img
          className="w-40 h-auto float-right"
          src={`/images/items/item_${potion.id}.webp`}
        />

        <p className="text-lg text-white font-semibold px-5 py-1">
          {potion.type}
        </p>
        <p className="text-lg text-white font-semibold px-5 py-1">---</p>
        <div className="px-5 pt-20 py-2">
          <Star rarity={potion.rarity} />
        </div>

        <div className="border-t-2 border-black"></div>
      </div>
      <div className="bg-gray-200 pb-3 text-lg">
        <div className="font-bold px-5 py-3">
          <p>- {potion.effect}</p>
        </div>
        <div className="font-semibold px-5 py-3">
          <p>{potion.description.replace(/<br\/>/g, " ")}</p>
        </div>
      </div>
    </div>
  );
}
