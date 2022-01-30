import { Star } from "../../lib/lib";

export default function ElementalStoneMaterialCard({ elementalStoneMaterial }) {
  return (
    <div className="w-96 hover:shadow-xl ">
      <div
        className={`relative ${
          elementalStoneMaterial.rarity == 1 ? "bg-gray-400" : ""
        }${elementalStoneMaterial.rarity == 2 ? "bg-green-400" : ""}${
          elementalStoneMaterial.rarity == 3 ? "bg-blue-400" : ""
        }${elementalStoneMaterial.rarity == 4 ? "bg-purple-400" : ""} ${
          elementalStoneMaterial.rarity == 5 ? "bg-yellow-400" : ""
        } w-96 `}
      >
        <div
          className={`text-xl text-white ${
            elementalStoneMaterial.rarity == 1 ? "bg-gray-500" : ""
          }${elementalStoneMaterial.rarity == 2 ? "bg-green-500" : ""}${
            elementalStoneMaterial.rarity == 3 ? "bg-blue-500" : ""
          }${elementalStoneMaterial.rarity == 4 ? "bg-purple-500" : ""} ${
            elementalStoneMaterial.rarity == 5 ? "bg-yellow-500" : ""
          } font-semibold px-5 py-3`}
        >
          <div>{elementalStoneMaterial.name}</div>
        </div>
        <img
          className="w-40 h-auto float-right"
          src={`/images/items/item_${elementalStoneMaterial.id}.webp`}
        />

        <p className="text-lg text-white font-semibold px-5 py-1">---</p>
        <p className="text-lg text-white font-semibold px-5 py-1">---</p>
        <div className="px-5 pt-20 py-2">
          <Star rarity={elementalStoneMaterial.rarity} />
        </div>

        <div className="border-t-2 border-black"></div>
      </div>
      <div className="bg-gray-200 pb-3 text-lg">
        <div className="font-semibold px-5 py-3">
          <p>{elementalStoneMaterial.description.replace(/<br\/>/g, " ")}</p>
        </div>

        {elementalStoneMaterial.source && (
          <div>
            <div className="font-bold px-5 py-3">
              {elementalStoneMaterial.source.map((source, index) => (
                <div className="border-2 border-gray-400 p-2 my-2" key={index}>
                  {source}
                </div>
              ))}
            </div>
            <br />
          </div>
        )}
      </div>
    </div>
  );
}
