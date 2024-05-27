import { useParams } from "next/navigation";
import en from "./languages/en";
import pl from "./languages/pl";
import { Dictionary } from "./types";

const dictionaries = {
  en,
  pl,
};

export function useDictionary() {
  const { lang } = useParams();
  const locale = (lang as string) || "en";
  console.log("locale", locale);

  return (key: keyof Dictionary) => {
    const checkedLocale =
      (locale as string) in dictionaries
        ? (locale as keyof typeof dictionaries)
        : "en";

    return key in dictionaries[checkedLocale]
      ? dictionaries[checkedLocale][key]
      : dictionaries[checkedLocale]["key-not-found"];
  };
}
