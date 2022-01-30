import { Star } from "../../lib/lib";

export default function CommonMaterialCard({ commonMaterial }) {
  return (
    <div className="w-96 hover:shadow-xl ">
      <div
        className={`relative ${
          commonMaterial.rarity == 1 ? "bg-gray-400" : ""
        }${commonMaterial.rarity == 2 ? "bg-green-400" : ""}${
          commonMaterial.rarity == 3 ? "bg-blue-400" : ""
        }${commonMaterial.rarity == 4 ? "bg-purple-400" : ""} ${
          commonMaterial.rarity == 5 ? "bg-yellow-400" : ""
        } w-96 `}
      >
        <div
          className={`text-xl text-white ${
            commonMaterial.rarity == 1 ? "bg-gray-500" : ""
          }${commonMaterial.rarity == 2 ? "bg-green-500" : ""}${
            commonMaterial.rarity == 3 ? "bg-blue-500" : ""
          }${commonMaterial.rarity == 4 ? "bg-purple-500" : ""} ${
            commonMaterial.rarity == 5 ? "bg-yellow-500" : ""
          } font-semibold px-5 py-3`}
        >
          <div>{commonMaterial.name}</div>
        </div>
        <img
          className="w-40 h-auto float-right"
          src={`/images/items/item_${commonMaterial.id}.webp`}
        />

        <p className="text-lg text-white font-semibold px-5 py-1">---</p>
        <p className="text-lg text-white font-semibold px-5 py-1">---</p>
        <div className="px-5 pt-20 py-2">
          <Star rarity={commonMaterial.rarity} />
        </div>

        <div className="border-t-2 border-black"></div>
      </div>
      <div className="bg-gray-200 pb-3 text-lg">
        <div className="font-semibold px-5 py-3">
          <p>{commonMaterial.description.replace(/<br\/>/g, " ")}</p>
        </div>

        {commonMaterial.source && (
          <div>
            <div className="font-bold px-5 py-3">
              {commonMaterial.source.map((source, index) => (
                <div className="border-2 border-gray-400 p-2 my-2" key={index}>
                  {source}
                </div>
              ))}
            </div>
            <br />
          </div>
        )}

        {commonMaterial.craft && (
          <div>
            <div className="font-bold px-5 py-3">
              <div className="flex">
                + Mora
                <img
                  className="w-7 h-auto mx-1"
                  src={`/images/items/item_mora.webp`}
                />
                x{commonMaterial.craft.cost}
              </div>
              {commonMaterial.craft.items.map((craft, index) => (
                <div className="flex" key={index}>
                  + {craft.name}
                  <img
                    className="w-7 h-auto mx-1"
                    src={`/images/items/item_${craft.id}.webp`}
                  />
                  x{craft.amount}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
