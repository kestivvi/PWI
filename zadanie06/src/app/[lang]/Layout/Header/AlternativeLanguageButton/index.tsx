"use client";

import plFlag from "@/app/img/pl.svg";
import usFlag from "@/app/img/us.svg";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export default function AlternativeLanguageButton() {
  const { lang } = useParams();
  const path = usePathname();

  const locale = lang as string;
  const isEnglish = locale === "en";

  const newPath = path.replace(
    isEnglish ? "en" : "pl",
    isEnglish ? "pl" : "en"
  );

  return (
    <Link href={newPath}>
      <Image
        src={isEnglish ? plFlag : usFlag}
        height={32}
        width={32}
        alt={`change language to ${isEnglish ? "polish" : "english"}`}
      />
    </Link>
  );
}
