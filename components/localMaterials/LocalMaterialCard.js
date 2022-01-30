import { Star } from "../../lib/lib";

export default function LocalMaterialCard({ localMaterial }) {
  return (
    <div className="w-96 hover:shadow-xl ">
      <div className={`relative bg-gray-400 w-96 `}>
        <div
          className={`text-xl text-white bg-gray-500 font-semibold px-5 py-3`}
        >
          <div>{localMaterial.name}</div>
        </div>
        <img
          className="w-40 h-auto float-right"
          src={`/images/items/item_${localMaterial.id}.webp`}
        />

        <p className="text-lg text-white font-semibold px-5 py-1">
          {localMaterial.location}
        </p>
        <p className="text-lg text-white font-semibold px-5 py-1">---</p>
        <div className="px-5 pt-20 py-2">
          <Star rarity={localMaterial.rarity} />
        </div>

        <div className="border-t-2 border-black"></div>
      </div>
      <div className="bg-gray-200 pb-3 text-lg">
        <div className="font-semibold px-5 py-3">
          <p>{localMaterial.description.replace(/<br\/>/g, " ")}</p>
        </div>

        {localMaterial.source && (
          <div>
            <div className="font-bold px-5 py-3">
              {localMaterial.source.map((source, index) => (
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
