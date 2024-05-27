"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/app/img/logo-256.webp";
import styles from "./styles.module.css";
import BurgerNavigation from "./BurgerNavigation";
import NavLink from "./NavLink";
import { useDictionary } from "@/dictionary";

export default function Header() {
  const d = useDictionary();

  return (
    <header className={styles.header}>
      <Link href="/">
        <h2 className={`${styles.header_logo} product-font`}>
          <Image className={styles.logo} src={logo} alt="logo-full-moon" />
          MOON <span className="color-accent">LAKE</span>
        </h2>
      </Link>

      <nav className={styles.navigation}>
        <div className={styles.navigation_list}>
          <NavLink href="/">{d("navigation-home")}</NavLink>
          <NavLink href="/docs">{d("navigation-docs")}</NavLink>
          <NavLink href="/blog">{d("navigation-blog")}</NavLink>
          <NavLink href="/about">{d("navigation-about")}</NavLink>
        </div>

        <div className={styles.navigation_burger}>
          <BurgerNavigation />
        </div>
      </nav>
    </header>
  );
}
