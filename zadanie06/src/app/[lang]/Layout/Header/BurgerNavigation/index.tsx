"use client";

import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { useState } from "react";
import styles from "./styles.module.css";
import NavButton from "./NavButton";
import { useDictionary } from "@/dictionary";

export default function BurgerNavigation() {
  const [visibleTop, setVisibleTop] = useState(false);
  const d = useDictionary();

  const closeSidebar = () => {
    setVisibleTop(false);
  };

  return (
    <>
      <Button
        icon="pi pi-bars"
        rounded
        text
        aria-label="Filter"
        style={{ color: "var(--color-accent)" }}
        onClick={() => {
          console.log("clicked");
          setVisibleTop(true);
        }}
      />

      <Sidebar
        visible={visibleTop}
        position="top"
        onHide={() => setVisibleTop(false)}
        style={{
          height: "fit-content",
          backgroundColor: "var(--color-bg)",
        }}
        header={<h2>{d("navigation")}</h2>}
      >
        <ul className={styles.nav_list}>
          <NavButton
            href="/"
            label={d("navigation-home")}
            closeSidebar={closeSidebar}
          />
          <NavButton
            href="/docs"
            label={d("navigation-docs")}
            closeSidebar={closeSidebar}
          />
          <NavButton
            href="/blog"
            label={d("navigation-blog")}
            closeSidebar={closeSidebar}
          />
          <NavButton
            href="/about"
            label={d("navigation-about")}
            closeSidebar={closeSidebar}
          />
        </ul>
      </Sidebar>
    </>
  );
}
