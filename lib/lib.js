import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rate from "rc-rate";

export function skillFunction(markup) {
  var temp = markup;
  for (let i = 0; i < 50; i++) {
    if (i % 2 == 0)
      temp = temp.replace(/\*\*/, '<span style="color: #FFD780FF;">');
    else temp = temp.replace(/\*\*/, "</span> ");
  }
  temp = temp
    .replace(/·/g, "- ")
    .replace(/<span>/g, '<span style="font-weight: bold;">')
    .replace(/\n/g, "<br>");
  // .replace(/Anemo DMG/g, '<span style="color: #80FFD7FF;">Anemo DMG</span>')
  // .replace(/Hydro DMG/g, '<span style="color: #80C0FFFF;">Hydro DMG</span>')
  // .replace(/Pyro DMG/g, '<span style="color: #FF9999FF;">Pyro DMG</span>')
  // .replace(/Cryo DMG/g, '<span style="color: #99FFFFFF;">Cryo DMG</span>')
  // .replace(/Electro DMG/g, '<span style="color: #FFACFFFF;">Electro DMG</span>')
  // .replace(/Geo DMG/g, '<span style="color: #FFE699FF;">Geo DMG</span>')
  // .replace(
  //   /Nguyên Tố Phong/g,
  //   '<span style="color: #80FFD7FF;">Nguyên Tố Phong</span>'
  // )
  // .replace(
  //   /Nguyên Tố Thủy/g,
  //   '<span style="color: #80C0FFFF;">Nguyên Tố Thủy</span>'
  // )
  // .replace(
  //   /Nguyên Tố Hỏa/g,
  //   '<span style="color: #FF9999FF;">Nguyên Tố Hỏa</span>'
  // )
  // .replace(
  //   /Nguyên Tố Băng/g,
  //   '<span style="color: #99FFFFFF;">Nguyên Tố Băng</span>'
  // )
  // .replace(
  //   /Nguyên Tố Lôi/g,
  //   '<span style="color: #FFACFFFF;">Nguyên Tố Lôi</span>'
  // )
  // .replace(
  //   /Nguyên Tố Nham/g,
  //   '<span style="color: #FFE699FF;">Nguyên Tố Nham</span>'
  // );
  return { __html: temp };
}

export function Star({ rarity }) {
  return (
    <Rate
      value={rarity}
      count={5}
      allowHalf
      character={<FontAwesomeIcon icon={faStar} />}
      disabled={true}
    />
  );
}