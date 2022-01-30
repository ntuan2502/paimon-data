import { Star } from "../../lib/lib";

export default function TalentLvlUpMaterialCard({ talentLvlUpMaterial }) {
  return (
    <div className="w-96 hover:shadow-xl ">
      <div
        className={`relative ${
          talentLvlUpMaterial.rarity == 1 ? "bg-gray-400" : ""
        }${talentLvlUpMaterial.rarity == 2 ? "bg-green-400" : ""}${
          talentLvlUpMaterial.rarity == 3 ? "bg-blue-400" : ""
        }${talentLvlUpMaterial.rarity == 4 ? "bg-purple-400" : ""} ${
          talentLvlUpMaterial.rarity == 5 ? "bg-yellow-400" : ""
        } w-96 `}
      >
        <div
          className={`text-xl text-white ${
            talentLvlUpMaterial.rarity == 1 ? "bg-gray-500" : ""
          }${talentLvlUpMaterial.rarity == 2 ? "bg-green-500" : ""}${
            talentLvlUpMaterial.rarity == 3 ? "bg-blue-500" : ""
          }${talentLvlUpMaterial.rarity == 4 ? "bg-purple-500" : ""} ${
            talentLvlUpMaterial.rarity == 5 ? "bg-yellow-500" : ""
          } font-semibold px-5 py-3`}
        >
          <div>{talentLvlUpMaterial.name}</div>
        </div>
        <img
          className="w-40 h-auto float-right"
          src={`/images/items/item_${talentLvlUpMaterial.id}.webp`}
        />

        <p className="text-lg text-white font-semibold px-5 py-1">
          {talentLvlUpMaterial.location ? talentLvlUpMaterial.location : "---"}
        </p>
        <p className="text-lg text-white font-semibold px-5 py-1">---</p>
        <div className="px-5 pt-20 py-2">
          <Star rarity={talentLvlUpMaterial.rarity} />
        </div>

        <div className="border-t-2 border-black"></div>
      </div>
      <div className="bg-gray-200 pb-3 text-lg">
        <div className="font-semibold px-5 py-3">
          <p>{talentLvlUpMaterial.description.replace(/<br\/>/g, " ")}</p>
        </div>

        {talentLvlUpMaterial.source && (
          <div>
            <div className="font-bold px-5">
              {talentLvlUpMaterial.source.map((source, index) => (
                <div className="border-2 border-gray-400 p-2 my-2" key={index}>
                  {source}
                </div>
              ))}
            </div>
          </div>
        )}

        {talentLvlUpMaterial.days && (
          <div>
            <div className="font-bold px-5">
              <div className="border-2 border-gray-400 p-2 my-2">
                {talentLvlUpMaterial.domain +
                  ": " +
                  talentLvlUpMaterial.days.map((days, index) => " " + days)}
              </div>
            </div>
            <br />
          </div>
        )}

        {talentLvlUpMaterial.craft && (
          <div>
            <div className="font-bold px-5 py-3">
              <div className="flex">
                + Mora
                <img
                  className="w-7 h-auto mx-1"
                  src={`/images/items/item_mora.webp`}
                />
                x{talentLvlUpMaterial.craft.cost}
              </div>
              {talentLvlUpMaterial.craft.items.map((craft, index) => (
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

        {talentLvlUpMaterial.convert && (
          <div>
            <div className="font-bold px-5 py-3">
              {talentLvlUpMaterial.convert.map((items, index) => (
                <div key={index}>
                  <br />
                  {items.map((item, i) => (
                    <div className="flex" key={i}>
                      * {item.name}
                      <img
                        className="w-7 h-auto mx-1"
                        src={`/images/items/item_${item.id}.webp`}
                      />
                      x{item.amount}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
