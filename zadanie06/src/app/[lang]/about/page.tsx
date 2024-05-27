"use client";

import { useDictionary } from "@/dictionary";
import styles from "./styles.module.css";

export default function Page() {
  const d = useDictionary();

  return (
    <main className={styles.main}>
      <h2 className={styles.header}>{d("about-header-1")}</h2>
      <p>{d("about-body-1")}</p>
      <h2 className={styles.header}>{d("about-header-2")}</h2>
      <p>{d("about-body-2-1")}</p>
      <ul>
        <li>{d("about-body-2-li-1")}</li>
        <li>{d("about-body-2-li-2")}</li>
        <li>{d("about-body-2-li-3")}</li>
        <li>{d("about-body-2-li-4")}</li>
        <li>{d("about-body-2-li-5")}</li>
      </ul>
      <p>{d("about-body-2-2")}</p>
    </main>
  );
}
