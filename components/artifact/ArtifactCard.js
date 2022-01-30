import Link from "next/link";
import Image from "next/image";
import { Star } from "../../lib/lib";

function ArtifactCard({ artifact }) {
  return (
    <Link href={`/artifacts/${artifact.id}`}>
      <a>
        <div className="w-96 hover:shadow-xl cursor-pointer">
          <div
            className={`relative ${
              artifact.max_rarity == 3 ? "bg-blue-400" : ""
            }${artifact.max_rarity == 4 ? "bg-purple-400" : ""} ${
              artifact.max_rarity == 5 ? "bg-yellow-400" : ""
            } w-96`}
          >
            <p
              className={`text-2xl text-white ${
                artifact.max_rarity == 3 ? "bg-blue-500" : ""
              }${artifact.max_rarity == 4 ? "bg-purple-500" : ""}${
                artifact.max_rarity == 5 ? "bg-yellow-500" : ""
              } font-semibold px-5 py-3`}
            >
              {artifact.name}
            </p>
            <img
              className="w-40 h-auto float-right"
              src={`/images/artifacts/${artifact.id}_circlet.png`}
            />
            <p className="text-sm text-white font-semibold px-5 py-1">{artifact.circlet.name}</p>
            <div className="px-5 pt-24 py-2">
              <Star rarity={artifact.max_rarity} />
            </div>

            <div className="border-t-2 border-black"></div>
          </div>
          <div className="bg-gray-200 pb-3 text-lg">
            <p className="text-lg text-green-400 font-semibold px-5 pt-5 pb-1">
              {artifact.name}:
            </p>
            {artifact.one_pc ? (
              <div className="px-5 flex">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    />
                  </svg>
                </div>
                <div className="px-5 font-semibold">{artifact.one_pc}</div>
              </div>
            ) : (
              <div>
                <div className="px-5 flex">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                      />
                    </svg>
                  </div>
                  <div className="px-5 font-semibold">{artifact.two_pc}</div>
                </div>
                <div className="px-5 flex">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                      />
                    </svg>
                  </div>
                  <div className="px-5 font-semibold">{artifact.four_pc}</div>
                </div>
              </div>
            )}

            <div className="font-bold px-5 py-0">
              <p>---</p>

              {artifact.flower && (
                <div className="flex item-center">
                  <img
                    className="w-7 h-auto mx-1"
                    src={`/images/artifacts/${artifact.id}_flower.png`}
                  />
                  <div>{artifact.flower.name}</div>
                </div>
              )}
              {artifact.plume && (
                <div className="flex item-center">
                  <img
                    className="w-7 h-auto mx-1"
                    src={`/images/artifacts/${artifact.id}_plume.png`}
                  />
                  <div>{artifact.plume.name}</div>
                </div>
              )}
              {artifact.sands && (
                <div className="flex item-center">
                  <img
                    className="w-7 h-auto mx-1"
                    src={`/images/artifacts/${artifact.id}_sands.png`}
                  />
                  <div>{artifact.sands.name}</div>
                </div>
              )}
              {artifact.goblet && (
                <div className="flex item-center">
                  <img
                    className="w-7 h-auto mx-1"
                    src={`/images/artifacts/${artifact.id}_goblet.png`}
                  />
                  <div>{artifact.goblet.name}</div>
                </div>
              )}
              {artifact.circlet && (
                <div className="flex item-center">
                  <img
                    className="w-7 h-auto mx-1"
                    src={`/images/artifacts/${artifact.id}_circlet.png`}
                  />
                  <div>{artifact.circlet.name}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default ArtifactCard;
