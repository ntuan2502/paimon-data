import { useRouter } from "next/router";
import en from "../locales/en.json";
import chs from "../locales/zh.json";
import cht from "../locales/tw.json";
import fr from "../locales/fr.json";
import de from "../locales/de.json";
import id from "../locales/id.json";
import ja from "../locales/ja.json";
import ko from "../locales/ko.json";
import pt from "../locales/pt.json";
import ru from "../locales/ru.json";
import es from "../locales/es.json";
import th from "../locales/th.json";
import vi from "../locales/vi.json";

const useTrans = () => {
  const { locale } = useRouter();

  switch (locale) {
    case "en":
      return en;
    case "chs":
      return chs;
    case "cht":
      return cht;
    case "fr":
      return fr;
    case "de":
      return de;
    case "id":
      return id;
    case "ja":
      return ja;
    case "ko":
      return ko;
    case "pt":
      return pt;
    case "ru":
      return ru;
    case "es":
      return es;
    case "th":
      return th;
    case "vi":
      return vi;
    default:
      return vi;
  }
};

export default useTrans;
