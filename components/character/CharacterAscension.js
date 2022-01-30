export default function CharacterAscension({ ascension }) {
  var cost = 0;
  var mat11 = 0;
  var mat12 = 0;
  var mat13 = 0;
  var mat14 = 0;
  var mat2 = 0;
  var mat3 = 0;
  var mat41 = 0;
  var mat42 = 0;
  var mat43 = 0;
  for (let index = 0; index < ascension.length; index++) {
    cost += ascension[index].cost ? ascension[index].cost : 0;
    mat2 += ascension[index].mat2 ? ascension[index].mat2.amount : 0;
    mat3 += ascension[index].mat3 ? ascension[index].mat3.amount : 0;
    if (index == 0 || index == 1)
      mat41 += ascension[index].mat4 ? ascension[index].mat4.amount : 0;
    else if (index == 2 || index == 3)
      mat42 += ascension[index].mat4 ? ascension[index].mat4.amount : 0;
    else mat43 += ascension[index].mat4 ? ascension[index].mat4.amount : 0;
    if (index == 0)
      mat11 += ascension[index].mat1 ? ascension[index].mat1.amount : 0;
    else if (index == 1 || index == 2)
      mat12 += ascension[index].mat1 ? ascension[index].mat1.amount : 0;
    else if (index == 3 || index == 4)
      mat13 += ascension[index].mat1 ? ascension[index].mat1.amount : 0;
    else mat14 += ascension[index].mat1 ? ascension[index].mat1.amount : 0;
  }
  return (
    <div>
      <div className="py-4 rounded-xl bg-item flex flex-col mb-4">
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto ">
            <div className="py-2 align-middle inline-block min-w-full">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="bg-white divide-y divide-gray-200">
                    {ascension.map((attribute, index) => (
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
                          {attribute.ascension} [{attribute.level[0]} -{" "}
                          {attribute.level[1]}]
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 flex">
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

                          {attribute.mat1 ? (
                            <div className="flex items-center w-64">
                              <div className="px-2">
                                {attribute.mat1 ? attribute.mat1.name : ""}
                              </div>
                              <img
                                src={`/images/items/item_${attribute.mat1.id}.webp`}
                                className="w-auto h-10"
                                alt=""
                              />
                              <div className="font-bold px-2">
                                x{attribute.mat1 ? attribute.mat1.amount : "0"}
                              </div>
                            </div>
                          ) : (
                            ""
                          )}

                          {attribute.mat3 ? (
                            <div className="flex items-center w-64">
                              <div className="px-2">
                                {attribute.mat3 ? attribute.mat3.name : ""}
                              </div>
                              <img
                                src={`/images/items/item_${attribute.mat3.id}.webp`}
                                className="w-auto h-10"
                                alt=""
                              />
                              <div className="font-bold px-2">
                                x{attribute.mat3 ? attribute.mat3.amount : "0"}
                              </div>
                            </div>
                          ) : (
                            ""
                          )}

                          {attribute.mat4 ? (
                            <div className="flex items-center w-64">
                              <div className="px-2">
                                {attribute.mat4 ? attribute.mat4.name : ""}
                              </div>
                              <img
                                src={`/images/items/item_${attribute.mat4.id}.webp`}
                                className="w-auto h-10"
                                alt=""
                              />
                              <div className="font-bold px-2">
                                x{attribute.mat4 ? attribute.mat4.amount : "0"}
                              </div>
                            </div>
                          ) : (
                            ""
                          )}

                          {attribute.mat2 ? (
                            <div className="flex items-center w-64">
                              <div className="px-2">
                                {attribute.mat2 ? attribute.mat2.name : ""}
                              </div>
                              <img
                                src={`/images/items/item_${attribute.mat2.id}.webp`}
                                className="w-auto h-10"
                                alt=""
                              />
                              <div className="font-bold px-2">
                                x{attribute.mat2 ? attribute.mat2.amount : "0"}
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </td>
                      </tr>
                    ))}
                    <tr className={`bg-red-400`}>
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm font-bold bg-red-500`}
                      >
                        +
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm flex">
                        <div className="flex items-center">
                          <img
                            src={`/images/items/item_mora.webp`}
                            className="w-auto h-10"
                            alt=""
                          />
                          <div className="font-bold px-2">x{cost}</div>
                        </div>

                        <div className="flex items-center">
                          <img
                            src={`/images/items/item_${ascension[0].mat1.id}.webp`}
                            className="w-auto h-10"
                            alt=""
                          />
                          <div className="font-bold px-2">x{mat11}</div>
                          <img
                            src={`/images/items/item_${ascension[1].mat1.id}.webp`}
                            className="w-auto h-10"
                            alt=""
                          />
                          <div className="font-bold px-2">x{mat12}</div>
                          <img
                            src={`/images/items/item_${ascension[3].mat1.id}.webp`}
                            className="w-auto h-10"
                            alt=""
                          />
                          <div className="font-bold px-2">x{mat13}</div>
                          <img
                            src={`/images/items/item_${ascension[5].mat1.id}.webp`}
                            className="w-auto h-10"
                            alt=""
                          />
                          <div className="font-bold px-2">x{mat14}</div>
                        </div>

                        {ascension[1].mat2 ? (
                          <div className="flex items-center">
                            <img
                              src={`/images/items/item_${ascension[1].mat2.id}.webp`}
                              className="w-auto h-10"
                              alt=""
                            />
                            <div className="font-bold px-2">x{mat2}</div>
                          </div>
                        ) : (
                          ""
                        )}

                        <div className="flex items-center">
                          <img
                            src={`/images/items/item_${ascension[1].mat3.id}.webp`}
                            className="w-auto h-10"
                            alt=""
                          />
                          <div className="font-bold px-2">x{mat3}</div>
                        </div>

                        <div className="flex items-center">
                          <img
                            src={`/images/items/item_${ascension[0].mat4.id}.webp`}
                            className="w-auto h-10"
                            alt=""
                          />
                          <div className="font-bold px-2">x{mat41}</div>
                          <img
                            src={`/images/items/item_${ascension[2].mat4.id}.webp`}
                            className="w-auto h-10"
                            alt=""
                          />
                          <div className="font-bold px-2">x{mat42}</div>
                          <img
                            src={`/images/items/item_${ascension[4].mat4.id}.webp`}
                            className="w-auto h-10"
                            alt=""
                          />
                          <div className="font-bold px-2">x{mat43}</div>
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
