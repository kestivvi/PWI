import type { Metadata } from "next";
import "./Layout/normalize.css";
import "./Layout/globals.css";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Providers from "./Layout/Providers/index";
import CookieBanner from "./Layout/CookieBanner";

export const metadata: Metadata = {
  title: "Moon Lake",
  description:
    "Moon Lake is a blazingly fast, progressive, and adaptable JavaScript framework. It's a frontend powerhouse designed for optimal performance and versatility. Start building dynamic, feature-rich applications with ease.",
  icons: { icon: "img/favicon.ico" },
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

        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Kode+Mono:wght@600&family=Spectral:ital,wght@1,800&display=swap"
          as="style"
        />
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
        <Providers>
          <Header />
          {children}
          <Footer />
          <CookieBanner />
        </Providers>
      </body>
    </html>
  );
}
