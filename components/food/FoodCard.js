import { useState, useEffect } from "react";
import { Star } from "../../lib/lib";

export default function FoodCard({ food }) {
  const [foodState, setFoodState] = useState(2);

  useEffect(() => {
    if (!food.results.special) setFoodState(2);
  }, [food]);

  return (
    <div className="w-96 hover:shadow-xl">
      <div
        className={`relative ${food.rarity == 1 ? "bg-gray-400" : ""}${
          food.rarity == 2 ? "bg-green-400" : ""
        }${food.rarity == 3 ? "bg-blue-400" : ""}${
          food.rarity == 4 ? "bg-purple-400" : ""
        } ${food.rarity == 5 ? "bg-yellow-400" : ""} w-96 `}
      >
        <div
          className={`text-xl text-white ${
            food.rarity == 1 ? "bg-gray-500" : ""
          }${food.rarity == 2 ? "bg-green-500" : ""}${
            food.rarity == 3 ? "bg-blue-500" : ""
          }${food.rarity == 4 ? "bg-purple-500" : ""}${
            food.rarity == 5 ? "bg-yellow-500" : ""
          } font-semibold px-5 py-3`}
        >
          {food.results.suspicious && foodState == 1 && (
            <div>{food.results.suspicious.name}</div>
          )}
          {food.results.normal && foodState == 2 && (
            <div>{food.results.normal.name}</div>
          )}
          {food.results.delicious && foodState == 3 && (
            <div>{food.results.delicious.name}</div>
          )}
          {food.results.special && foodState == 4 && (
            <div>{food.results.special.name}</div>
          )}
        </div>
        {food.results.suspicious && foodState == 1 && (
          <img
            className="w-40 h-auto float-right"
            src={`/images/items/item_suspicious_${food.id}.webp`}
          />
        )}
        {food.results.normal && foodState == 2 && (
          <img
            className="w-40 h-auto float-right"
            src={`/images/items/item_${food.id}.webp`}
          />
        )}
        {food.results.delicious && foodState == 3 && (
          <img
            className="w-40 h-auto float-right"
            src={`/images/items/item_delicious_${food.id}.webp`}
          />
        )}
        {food.results.special && foodState == 4 && (
          <img
            className="w-40 h-auto float-right"
            src={`/images/items/item_${food.results.special.id
              .replace(/"/g, "")
              .replace(/\(/g, "")
              .replace(/\)/g, "")
              .replace(/'/g, "")
              .replace(/-/g, "")
              .replace(/!/g, "")
              .replace(/ /g, "_")
              .replace(/.593/g, "._593")
              .toLowerCase()}.webp`}
          />
        )}
        <p className="text-lg text-white font-semibold px-5 py-1">
          {food.dish_type ? food.dish_type : "None"}
        </p>
        <p className="text-lg text-white font-semibold px-5 py-1">
          {food.results.special ? food.results.special.character.name : "None"}
        </p>
        <div className="px-5 pt-20 py-2">
          <Star rarity={food.rarity} />
        </div>

        <div className="border-t-2 border-black"></div>
      </div>
      <div className="bg-gray-200 pb-3 text-lg">
        <div className="text-white flex justify-around pt-3">
          <div
            onClick={() => setFoodState(1)}
            className={`${
              foodState == 1 ? "bg-red-500" : "bg-green-500"
            } hover:bg-red-700 rounded-full w-16 cursor-pointer text-center`}
          >
            1
          </div>
          <div
            onClick={() => setFoodState(2)}
            className={`${
              foodState == 2 ? "bg-red-500" : "bg-green-500"
            } hover:bg-red-700 rounded-full w-16 cursor-pointer text-center`}
          >
            2
          </div>
          <div
            onClick={() => setFoodState(3)}
            className={`${
              foodState == 3 ? "bg-red-500" : "bg-green-500"
            } hover:bg-red-700 rounded-full w-16 cursor-pointer text-center`}
          >
            3
          </div>
          {food.results.special && (
            <div
              onClick={() => setFoodState(4)}
              className={`${
                foodState == 4 ? "bg-red-500" : "bg-green-500"
              } hover:bg-red-700 rounded-full w-16 cursor-pointer text-center`}
            >
              4
            </div>
          )}
        </div>
        <div className="font-bold px-5 py-3">
          {food.results.suspicious && foodState == 1 && (
            <p>- {food.results.suspicious.effect}</p>
          )}
          {food.results.normal && foodState == 2 && (
            <p>- {food.results.normal.effect}</p>
          )}
          {food.results.delicious && foodState == 3 && (
            <p>- {food.results.delicious.effect}</p>
          )}
          {food.results.special && foodState == 4 && (
            <p>- {food.results.special.effect}</p>
          )}
        </div>
        <div className="font-semibold px-5 py-3">
          {food.results.suspicious && foodState == 1 && (
            <p>{food.results.suspicious.description}</p>
          )}
          {food.results.normal && foodState == 2 && (
            <p>{food.results.normal.description}</p>
          )}
          {food.results.delicious && foodState == 3 && (
            <p>{food.results.delicious.description}</p>
          )}
          {food.results.special && foodState == 4 && (
            <p>{food.results.special.description}</p>
          )}
        </div>
        {food.ingredients && (
          <div>
            <div className="font-bold px-5 py-3">
              {food.ingredients.map((item, index) => (
                <div className="flex" key={index}>
                  + {item.name}
                  <img
                    className="w-7 h-auto mx-1"
                    src={`/images/items/item_${item.id}.webp`}
                  />
                  x{item.amount}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
