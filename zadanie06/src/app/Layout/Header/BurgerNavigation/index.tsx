"use client";

import Link from "next/link";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { useState } from "react";
import styles from "./styles.module.css";
import NavButton from "./NavButton";

export default function BurgerNavigation() {
  const [visibleTop, setVisibleTop] = useState(false);

  const closeSidebar = () => {
    setVisibleTop(false)
  };

  return (
    <>
      <Button
        icon="pi pi-bars"
        rounded
        text
        aria-label="Filter"
        style={{ color: 'var(--color-accent)' }}
        onClick={() => {
          console.log("clicked")
          setVisibleTop(true)
        }}
      />

      <Sidebar
        visible={visibleTop}
        position="top"
        onHide={() => setVisibleTop(false)}
        style={{
          height: 'fit-content',
          backgroundColor: 'var(--color-bg)',
        }}
        header={<h2>Navigation</h2>}
      >
        <ul className={styles.nav_list}>
          <NavButton href="/" label="Home" closeSidebar={closeSidebar} />
          <NavButton href="/docs" label="Docs" closeSidebar={closeSidebar} />
          <NavButton href="/blog" label="Blog" closeSidebar={closeSidebar} />
          <NavButton href="/about" label="About" closeSidebar={closeSidebar} />
        </ul>
      </Sidebar>
    </>
  );
}
