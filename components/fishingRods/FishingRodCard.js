import { Star } from "../../lib/lib";

export default function FishingRodCard({ fishingRod }) {
  return (
    <div className="w-96 hover:shadow-xl ">
      <div
        className={`relative ${fishingRod.rarity == 1 ? "bg-gray-400" : ""}${
          fishingRod.rarity == 2 ? "bg-green-400" : ""
        }${fishingRod.rarity == 3 ? "bg-blue-400" : ""}${
          fishingRod.rarity == 4 ? "bg-purple-400" : ""
        } ${fishingRod.rarity == 5 ? "bg-yellow-400" : ""} w-96 `}
      >
        <div
          className={`text-xl text-white ${
            fishingRod.rarity == 1 ? "bg-gray-500" : ""
          }${fishingRod.rarity == 2 ? "bg-green-500" : ""}${
            fishingRod.rarity == 3 ? "bg-blue-500" : ""
          }${fishingRod.rarity == 4 ? "bg-purple-500" : ""} ${
            fishingRod.rarity == 5 ? "bg-yellow-500" : ""
          } font-semibold px-5 py-3`}
        >
          <div>{fishingRod.name}</div>
        </div>
        <img
          className="w-40 h-auto float-right"
          src={`/images/items/item_${fishingRod.id}.webp`}
        />

        <p className="text-lg text-white font-semibold px-5 py-1">
          {fishingRod.type}
        </p>
        <p className="text-lg text-white font-semibold px-5 py-1">---</p>
        <div className="px-5 pt-20 py-2">
          <Star rarity={fishingRod.rarity} />
        </div>

        <div className="border-t-2 border-black"></div>
      </div>
      <div className="bg-gray-200 pb-3 text-lg">
        <div className="font-semibold px-5 py-3">
          <p>{fishingRod.description.replace(/<br\/>/g, " ")}</p>
        </div>

        {fishingRod.source && (
          <div>
            <div className="font-bold px-5">
              {fishingRod.source.map((source, index) => (
                <div className="border-2 border-gray-400 p-2 my-2" key={index}>
                  {source}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
