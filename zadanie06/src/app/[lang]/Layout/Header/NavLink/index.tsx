"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import styles from "./styles.module.css";
import CustomLink from "@/components/CustomLink";

type Props = {
  href: string;
  children: ReactNode;
};

export default function NavLink({ children, href }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <CustomLink
      href={href}
      className={`${styles.link} ${isActive ? styles.current_link : ""}`}
    >
      {children}
    </CustomLink>
  );
}
