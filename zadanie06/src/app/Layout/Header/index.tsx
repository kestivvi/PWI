import Link from "next/link";
import Image from "next/image";
import logo from "@/app/img/logo-256.webp";
import styles from "./styles.module.css";
import BurgerNavigation from "./BurgerNavigation";
import NavLink from "./NavLink";

export default function Header() {
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
          <NavLink href="/">Home</NavLink>
          <NavLink href="/docs">Docs</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/about">About</NavLink>
        </div>

        <div className={styles.navigation_burger}>
          <BurgerNavigation />
        </div>
      </nav>

    </header>
  )
}
