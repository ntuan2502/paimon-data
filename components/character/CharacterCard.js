import Link from "next/link";
import Image from "next/image";
import { Star } from "../../lib/lib";

export default function CharacterCard({ id, name, rarity, disabled }) {
  return (
    <Link href={`/characters/${disabled === false ? id : "#"}`}>
      <a>
        <div className="relative bg-white py-6 px-6 rounded-3xl w-96 my-4 hover:shadow-xl cursor-pointer">
          <Image
            className="object-cover"
            width={405}
            height={720}
            src={`/images/characters/card/character_${id}_card.webp`}
          />
          <div className="mt-8">
            <p className="text-xl font-bold my-2 capitalize">
              {id.replace("_", " ")} {disabled === true ? "(*)" : ""}
            </p>
            <div className="border-t-2"></div>
            <div className="flex justify-between">
              <div className="my-2">
                <div className="flex space-x-2">
                  <Star rarity={rarity} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
