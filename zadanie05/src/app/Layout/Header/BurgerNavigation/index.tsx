"use client";

import Link from "next/link";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { useState } from "react";
import styles from "./styles.module.css";

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
          height: '80vh',

        }}
        header={<h2>Navigation</h2>}
      >
        <ul className={styles.nav_list}>
          <Link href="/" onClick={closeSidebar}><Button label="Home" link /></Link>
          <Link href="/docs" onClick={closeSidebar}><Button label="Docs" link /></Link>
          <Link href="/blog" onClick={closeSidebar}><Button label="Blog" link /></Link>
          <Link href="/about" onClick={closeSidebar}><Button label="About" link /></Link>
          <Link href="/contact" onClick={closeSidebar}><Button label="Contact" link /></Link>
        </ul>
      </Sidebar>
    </>
  );
}
