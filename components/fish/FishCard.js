import { Star } from "../../lib/lib";

export default function FishCard({ fish }) {
  return (
    <div className="w-96 hover:shadow-xl ">
      <div
        className={`relative ${fish.rarity == 1 ? "bg-gray-400" : ""}${
          fish.rarity == 2 ? "bg-green-400" : ""
        }${fish.rarity == 3 ? "bg-blue-400" : ""}${
          fish.rarity == 4 ? "bg-purple-400" : ""
        } ${fish.rarity == 5 ? "bg-yellow-400" : ""} w-96 `}
      >
        <div
          className={`text-xl text-white ${
            fish.rarity == 1 ? "bg-gray-500" : ""
          }${fish.rarity == 2 ? "bg-green-500" : ""}${
            fish.rarity == 3 ? "bg-blue-500" : ""
          }${fish.rarity == 4 ? "bg-purple-500" : ""} ${
            fish.rarity == 5 ? "bg-yellow-500" : ""
          } font-semibold px-5 py-3`}
        >
          <div>{fish.name}</div>
        </div>
        <img
          className="w-40 h-auto float-right"
          src={`/images/items/item_${fish.id}.webp`}
        />

        <p className="text-lg text-white font-semibold px-5 py-1">
          {fish.type}
        </p>
        <p className="text-lg text-white font-semibold px-5 py-1">---</p>
        <div className="px-5 pt-20 py-2">
          <Star rarity={fish.rarity} />
        </div>

        <div className="border-t-2 border-black"></div>
      </div>
      <div className="bg-gray-200 pb-3 text-lg">
        <div className="font-semibold px-5 py-3">
          <p>{fish.description.replace(/<br\/>/g, " ")}</p>
        </div>

        {fish.source && (
          <div>
            <div className="font-bold px-5">
              {fish.source.map((source, index) => (
                <div className="border-2 border-gray-400 p-2 my-2" key={index}>
                  {source}
                </div>
              ))}
            </div>
          </div>
        )}

        {fish.bait && (
          <div className="font-bold px-5 py-3 ">
            <div className="flex">
              + {fish.bait.name}
              <img
                className="w-7 h-auto mx-1"
                src={`/images/items/item_${fish.bait.id}.webp`}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
