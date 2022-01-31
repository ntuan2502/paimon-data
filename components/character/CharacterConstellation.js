import { skillFunction } from "../../lib/lib";

export default function CharacterConstellation({ id, constellations }) {
  return (
    <div>
      {constellations.map((value, key) => (
        <div className="py-4 rounded-xl bg-item flex flex-col mb-4" key={key}>
          <div className="mb-2 items-start px-0 sm:px-4">
            <img
              className={`w-16 h-16 mr-4 bg-blue-500 rounded-full float-left`}
              src={`/images/characters/skills/${id}/constellation_${constellations[key].id}.webp`}
              alt=""
            />
            <div>
              <p className="font-black font-display text-xl h-16 flex items-center">
                {constellations[key].name}
              </p>
              <div
                className="py-2"
                dangerouslySetInnerHTML={skillFunction(
                  constellations[key].description
                )}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
