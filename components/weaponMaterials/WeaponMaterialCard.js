import { Star } from "../../lib/lib";

export default function WeaponMaterialCard({ weaponMaterial }) {
  return (
    <div className="w-96 hover:shadow-xl ">
      <div
        className={`relative ${
          weaponMaterial.rarity == 1 ? "bg-gray-400" : ""
        }${weaponMaterial.rarity == 2 ? "bg-green-400" : ""}${
          weaponMaterial.rarity == 3 ? "bg-blue-400" : ""
        }${weaponMaterial.rarity == 4 ? "bg-purple-400" : ""} ${
          weaponMaterial.rarity == 5 ? "bg-yellow-400" : ""
        } w-96 `}
      >
        <div
          className={`text-xl text-white ${
            weaponMaterial.rarity == 1 ? "bg-gray-500" : ""
          }${weaponMaterial.rarity == 2 ? "bg-green-500" : ""}${
            weaponMaterial.rarity == 3 ? "bg-blue-500" : ""
          }${weaponMaterial.rarity == 4 ? "bg-purple-500" : ""} ${
            weaponMaterial.rarity == 5 ? "bg-yellow-500" : ""
          } font-semibold px-5 py-3`}
        >
          <div>{weaponMaterial.name}</div>
        </div>
        <img
          className="w-40 h-auto float-right"
          src={`/images/items/item_${weaponMaterial.id}.webp`}
        />

        <p className="text-lg text-white font-semibold px-5 py-1">
          {weaponMaterial.location
            ? weaponMaterial.location
            : "---"}
        </p>
        <p className="text-lg text-white font-semibold px-5 py-1">---</p>
        <div className="px-5 pt-20 py-2">
          <Star rarity={weaponMaterial.rarity} />

        </div>

        <div className="border-t-2 border-black"></div>
      </div>
      <div className="bg-gray-200 pb-3 text-lg">
        <div className="font-semibold px-5 py-3">
          <p>{weaponMaterial.description.replace(/<br\/>/g, " ")}</p>
        </div>

        {weaponMaterial.source && (
          <div>
            <div className="font-bold px-5">
              {weaponMaterial.source.map((source, index) => (
                <div className="border-2 border-gray-400 p-2 my-2" key={index}>
                  {source}
                </div>
              ))}
            </div>
          </div>
        )}

        {weaponMaterial.days && (
          <div>
            <div className="font-bold px-5">
              <div className="border-2 border-gray-400 p-2 my-2">
                {weaponMaterial.domain +
                  ": " +
                  weaponMaterial.days.map((days, index) => " " + days)}
              </div>
            </div>
            <br />
          </div>
        )}

        {weaponMaterial.craft && (
          <div>
            <div className="font-bold px-5 py-3 ">
              <div className="flex">
                + Mora
                <img
                  className="w-7 h-auto mx-1"
                  src={`/images/items/item_mora.webp`}
                />
                x{weaponMaterial.craft.cost}
              </div>
              {weaponMaterial.craft.items.map((craft, index) => (
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
