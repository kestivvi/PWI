import Link from "next/link";
import Image from "next/image";
import logo from "@/app/img/logo-256.webp";
import styles from "./styles.module.css";

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
        <ul className={styles.navigation_list}>
          <li className="inline-block"><a href="index.html" className={`${styles.link} ${styles.current_link}`}>Home</a></li>
          <li className="inline-block"><a href="docs.html" className={styles.link}>Docs</a></li>
          <li className="inline-block"><a href="blog.html" className={styles.link}>Blog</a></li>
          <li className="inline-block"><a href="about.html" className={styles.link}>About</a></li>
          <li className="inline-block"><a href="contact.html" className={styles.link}>Contact</a></li>
        </ul>

        {/* TODO: Make burger component */}
        <div className={styles.navigation_burger}>
          Burger
        </div>
      </nav>

    </header>
  )
}
