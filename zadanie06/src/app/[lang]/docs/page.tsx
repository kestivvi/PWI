"use client";

import { useDictionary } from "@/dictionary";
import styles from "./styles.module.css";

export default function Page() {
  const d = useDictionary();

  return (
    <main className={styles.main}>
      <h2 className={styles.header}>{d("docs-introduction-header")}</h2>
      <p>{d("docs-introduction-body")}</p>
      <h2 className={styles.header}>{d("docs-getting-started-header")}</h2>
      <p>{d("docs-getting-started-body")}</p>
      <h2 className={styles.header}>{d("docs-features-header")}</h2>
      <p>{d("docs-features-body")}</p>
      <ul>
        <li>{d("docs-features-1")}</li>
        <li>{d("docs-features-2")}</li>
        <li>{d("docs-features-3")}</li>
        <li>{d("docs-features-4")}</li>
        <li>{d("docs-features-5")}</li>
      </ul>
    </main>
  );
}
