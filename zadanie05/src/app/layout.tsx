import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./normalize.css"
import "./globals.css";
// import "./style.css"
import styles from "./layout.module.css";
import Image from "next/image";
import logo from "./img/logo-256.webp";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Moon Lake",
  description: "Moon Lake is a blazingly fast, progressive, and adaptable JavaScript framework. It's a frontend powerhouse designed for optimal performance and versatility. Start building dynamic, feature-rich applications with ease.",
  icons: { icon: "img/favicon.ico" }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <meta charSet="UTF-8"></meta> */}
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="preload"
          href="https://fonts.googleapis.com/css2?family=Kode+Mono:wght@600&family=Spectral:ital,wght@1,800&display=swap"
          as="style" />
        {/* <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Kode+Mono:wght@600&family=Spectral:ital,wght@1,800&display=swap"
          media="print" onLoad={function () { this.media = 'all' }}></link>
        <noscript>
          <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Kode+Mono:wght@600&family=Spectral:ital,wght@1,800&display=swap"></link>
        </noscript> */}

        {/* <link rel="stylesheet" href="normalize.css"></link> */}
        {/* <link rel="stylesheet" href="style.css"></link> */}

        {/* <link rel="icon" href="/favicon.ico" type="image/x-icon"></link> */}
        {/* <link rel="icon" href="img/favicon.ico" /> */}
      </head>
      <body>
        <header className={styles.header}>
          <Link href="/">
            <h2 className={`${styles.header_logo} product-font`}>
              <Image className={styles.logo} src={logo} alt="logo-full-moon" />
              MOON <span className="color-accent">LAKE</span>
            </h2>
          </Link>
          <nav className={styles.navigation}>
            <ul>
              <li className="inline-block"><a href="index.html" className={`${styles.link} ${styles.current_link}`}>Home</a></li>
              <li className="inline-block"><a href="docs.html" className={styles.link}>Docs</a></li>
              <li className="inline-block"><a href="blog.html" className={styles.link}>Blog</a></li>
              <li className="inline-block"><a href="about.html" className={styles.link}>About</a></li>
              <li className="inline-block"><a href="contact.html" className={styles.link}>Contact</a></li>
            </ul>
          </nav>
        </header>

        {children}

        <footer className={styles.footer}>
          <p>&copy; 2024 <span className="product-font">MOON <span className="color-accent">LAKE</span></span></p>

          <h3>Attributions</h3>
          <a href="https://www.vecteezy.com/free-png/sea-underworld-with-sun-light">Hero Image by Vecteezy</a>
          <a href="https://www.flaticon.com/free-icons/play-button" title="play button icons">Play button icons created by
            Those Icons - Flaticon</a>
          <a href="https://www.flaticon.com/free-icons/next" title="next icons">Next icons created by Roundicons -
            Flaticon</a>
          <a href="https://www.flaticon.com/free-icons/full-moon" title="full moon icons">Full moon icons created by
            vectorsmarket15 - Flaticon</a>
          <a href="https://www.flaticon.com/free-icons/rocket" title="rocket icons">Rocket icons created by Triangle Squad
            - Flaticon</a>
          <a href="https://www.flaticon.com/free-icons/thunder" title="thunder icons">Thunder icons created by Freepik -
            Flaticon</a>
          <a href="https://www.flaticon.com/free-icons/laptop" title="laptop icons">Laptop icons created by Vectors Market
            - Flaticon</a>
        </footer>
      </body>
    </html>
  );
}
