"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { ComponentProps } from "react";

export default function CustomLink({
  href,
  ...rest
}: ComponentProps<typeof Link>) {
  const { lang } = useParams();
  return <Link href={`/${lang}${href}`} {...rest} />;
}
