import { Star } from "../../lib/lib";

export default function CharacterBackground({ character, region }) {
  return (
    <div
      className={`rounded-lg shadow-lg bg-gray-600 flex flex-row flex-wrap p-3 antialiased ${
        region == "Mondstadt" ? "bg-[url('/images/region/mondstadt.png')]" : ""
      } ${region == "Liyue" ? "bg-[url('/images/region/liyue.png')]" : ""} ${
        region == "Inazuma" ? "bg-[url('/images/region/inazuma.png')]" : ""
      } ${
        region == "Fatui" ? "bg-[url('/images/region/fatui.png')]" : ""
      } bg-no-repeat bg-cover bg-blend-multiply`}
    >
      <div className="md:w-1/3 w-full px-3 flex flex-row flex-wrap">
        <div className="w-full text-gray-700 font-semibold relative pt-3 md:pt-0">
          <div className="text-2xl text-white leading-tight">
            {character.name}
          </div>
          <div className="text-normal text-gray-300">
            <span className="pb-1">{character.title}</span>
          </div>
          <div className="text-normal text-gray-300">
            <Star rarity={character.rarity || 5} />
          </div>
          <br />
          <div className="text-normal text-gray-300">
            <span className="pb-1">
              {character.weapon_type} - {character.element}
            </span>
          </div>
          <br />
          {character.birthday[0] ? (
            <div className="text-normal text-gray-300">
              <span className="pb-1">
                {character.birthday[0]}/{character.birthday[1]}
              </span>
            </div>
          ) : (
            ""
          )}

          <div className="text-normal text-gray-300">
            <span className="pb-1">{character.constellation}</span>
          </div>
          <div className="text-normal text-gray-300">
            <span className="pb-1">{character.affiliation}</span>
          </div>
          <br />
          <div className="text-normal text-gray-300">
            <span className="pb-1">{character.cv.english}</span>
          </div>
          <div className="text-normal text-gray-300">
            <span className="pb-1">{character.cv.chinese}</span>
          </div>
          <div className="text-normal text-gray-300">
            <span className="pb-1">{character.cv.japanese}</span>
          </div>
          <div className="text-normal text-gray-300">
            <span className="pb-1">{character.cv.korean}</span>
          </div>
          <br />
          <div className="text-sm text-gray-300 pt-3 md:pt-0 bottom-0 right-0">
            {character.description}
          </div>
          <br />
        </div>
      </div>

      <div className="md:w-2/3 w-full flex justify-center items-center">
        <img
          className="rounded-lg antialiased"
          src={`/images/characters/backgrounds/${character.id}.png`}
        />
      </div>
    </div>
  );
}
