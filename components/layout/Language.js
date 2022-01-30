import { useRouter } from "next/router";
import { Menu } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Language({ language }) {
  const router = useRouter();
  const changeLanguage = (e) => {
    const locale = e;
    router.push(locale + router.asPath, router.asPath, { locale });
  };

  var lang = "Tiếng Việt";
  if (language == "en") lang = "English";
  else if (language == "chs") lang = "中文(简体)";
  else if (language == "cht") lang = "中文(繁體)";
  else if (language == "fr") lang = "Français";
  else if (language == "de") lang = "Deutsch";
  else if (language == "id") lang = "Indonesia";
  else if (language == "ja") lang = "日本語";
  else if (language == "ko") lang = "한국어";
  else if (language == "pt") lang = "Português";
  else if (language == "ru") lang = "Русский";
  else if (language == "es") lang = "Español";
  else if (language == "th") lang = "ภาษาไทย";
  else lang = "Tiếng Việt";

  return (
    <Menu.Item onClick={() => changeLanguage(language)}>
      {({ active }) => (
        <a
          className={classNames(
            active ? "bg-gray-100" : "",
            "block px-4 py-2 text-sm text-gray-700 cursor-pointer"
          )}
        >
          <div>{lang}</div>
        </a>
      )}
    </Menu.Item>
  );
}
