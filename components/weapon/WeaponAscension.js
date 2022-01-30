export default function WeaponAscension({ ascensions }) {
  var cost = 0;
  var mat11 = 0;
  var mat12 = 0;
  var mat13 = 0;
  var mat14 = 0;
  var mat21 = 0;
  var mat22 = 0;
  var mat23 = 0;
  var mat31 = 0;
  var mat32 = 0;
  var mat33 = 0;

  for (let index = 0; index < ascensions.length; index++) {
    if (index == 0) continue;
    cost += ascensions[index].cost ? ascensions[index].cost : 0;
    if (index == 1) {
      mat11 += ascensions[index].materials[0].amount;
      mat21 += ascensions[index].materials[1].amount;
      mat31 += ascensions[index].materials[2].amount;
    } else if (index == 2) {
      mat12 += ascensions[index].materials[0].amount;
      mat21 += ascensions[index].materials[1].amount;
      mat31 += ascensions[index].materials[2].amount;
    } else if (index == 3) {
      mat12 += ascensions[index].materials[0].amount;
      mat22 += ascensions[index].materials[1].amount;
      mat32 += ascensions[index].materials[2].amount;
    } else if (index == 4) {
      mat13 += ascensions[index].materials[0].amount;
      mat22 += ascensions[index].materials[1].amount;
      mat32 += ascensions[index].materials[2].amount;
    } else if (ascensions.length > 5) {
      if (index == 5) {
        mat13 += ascensions[index].materials[0].amount;
        mat23 += ascensions[index].materials[1].amount;
        mat33 += ascensions[index].materials[2].amount;
      } else {
        mat14 += ascensions[index].materials[0].amount;
        mat23 += ascensions[index].materials[1].amount;
        mat33 += ascensions[index].materials[2].amount;
      }
    }
  }

  return (
    <div>
      <div className="py-4 rounded-xl bg-item flex flex-col mb-4">
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto">
            <div className="py-2 align-middle inline-block min-w-full">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="bg-white divide-y divide-gray-200">
                    {ascensions.map((attribute, index) =>
                      index != 0 ? (
                        <tr
                          key={index}
                          className={`${
                            index % 2 != 0 ? "bg-green-100" : "bg-blue-100"
                          }`}
                        >
                          <td
                            className={`px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-bold ${
                              index % 2 != 0 ? "bg-green-200" : "bg-blue-200"
                            }`}
                          >
                            {attribute.ascension}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 flex">
                            {attribute.materials[0] ? (
                              <div className="flex items-center w-72">
                                <div className="px-2">
                                  {attribute.materials[0]
                                    ? attribute.materials[0].name
                                    : ""}
                                </div>
                                <img
                                  src={`/images/items/item_${attribute.materials[0].id}.webp`}
                                  className="w-auto h-10"
                                  alt=""
                                />
                                <div className="font-bold px-2">
                                  x
                                  {attribute.materials[0]
                                    ? attribute.materials[0].amount
                                    : "0"}
                                </div>
                              </div>
                            ) : (
                              ""
                            )}

                            {attribute.materials[1] ? (
                              <div className="flex items-center w-72">
                                <div className="px-2">
                                  {attribute.materials[1]
                                    ? attribute.materials[1].name
                                    : ""}
                                </div>
                                <img
                                  src={`/images/items/item_${attribute.materials[1].id}.webp`}
                                  className="w-auto h-10"
                                  alt=""
                                />
                                <div className="font-bold px-2">
                                  x
                                  {attribute.materials[1]
                                    ? attribute.materials[1].amount
                                    : "0"}
                                </div>
                              </div>
                            ) : (
                              ""
                            )}

                            {attribute.materials[2] ? (
                              <div className="flex items-center w-72">
                                <div className="px-2">
                                  {attribute.materials[2]
                                    ? attribute.materials[2].name
                                    : ""}
                                </div>
                                <img
                                  src={`/images/items/item_${attribute.materials[2].id}.webp`}
                                  className="w-auto h-10"
                                  alt=""
                                />
                                <div className="font-bold px-2">
                                  x
                                  {attribute.materials[2]
                                    ? attribute.materials[2].amount
                                    : "0"}
                                </div>
                              </div>
                            ) : (
                              ""
                            )}

                            {attribute.cost ? (
                              <div className="flex items-center w-48">
                                <div className="px-2">Mora</div>
                                <img
                                  src={`/images/items/item_mora.webp`}
                                  className="w-auto h-10"
                                  alt=""
                                />
                                <div className="font-bold px-2">
                                  x{attribute.cost ? attribute.cost : "0"}
                                </div>
                              </div>
                            ) : (
                              ""
                            )}
                          </td>
                        </tr>
                      ) : null
                    )}
                    <tr className={`bg-red-300`}>
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm font-bold bg-red-400`}
                      >
                        +
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm">
                        <div className="flex items-center">
                          <img
                            src={`/images/items/item_mora.webp`}
                            className="w-auto h-10"
                            alt=""
                          />
                          <div className="font-bold px-2">x{cost}</div>
                          <img
                            src={`/images/items/item_${ascensions[1].materials[0].id}.webp`}
                            className="w-auto h-10"
                            alt=""
                          />
                          <div className="font-bold px-2">x{mat11}</div>
                          <img
                            src={`/images/items/item_${ascensions[1].materials[1].id}.webp`}
                            className="w-auto h-10"
                            alt=""
                          />
                          <div className="font-bold px-2">x{mat21}</div>
                          <img
                            src={`/images/items/item_${ascensions[1].materials[2].id}.webp`}
                            className="w-auto h-10"
                            alt=""
                          />
                          <div className="font-bold px-2">x{mat31}</div>
                          <img
                            src={`/images/items/item_${ascensions[3].materials[0].id}.webp`}
                            className="w-auto h-10"
                            alt=""
                          />
                          <div className="font-bold px-2">x{mat12}</div>
                          <img
                            src={`/images/items/item_${ascensions[4].materials[1].id}.webp`}
                            className="w-auto h-10"
                            alt=""
                          />
                          <div className="font-bold px-2">x{mat22}</div>
                          <img
                            src={`/images/items/item_${ascensions[4].materials[2].id}.webp`}
                            className="w-auto h-10"
                            alt=""
                          />
                          <div className="font-bold px-2">x{mat32}</div>
                          {ascensions[6] ? (
                            <div className="flex items-center">
                              <img
                                src={`/images/items/item_${ascensions[6].materials[0].id}.webp`}
                                className="w-auto h-10"
                                alt=""
                              />
                              <div className="font-bold px-2">x{mat13}</div>
                              <img
                                src={`/images/items/item_${ascensions[6].materials[1].id}.webp`}
                                className="w-auto h-10"
                                alt=""
                              />
                              <div className="font-bold px-2">x{mat23}</div>
                              <img
                                src={`/images/items/item_${ascensions[6].materials[2].id}.webp`}
                                className="w-auto h-10"
                                alt=""
                              />
                              <div className="font-bold px-2">x{mat33}</div>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
