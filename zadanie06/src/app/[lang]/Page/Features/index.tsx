"use client";

import { useDictionary } from "@/dictionary";
import styles from "./styles.module.css";

export default function Features() {
  const d = useDictionary();

  return (
    <section className={styles.features}>
      <div className={styles.feature}>
        <h3 className={`${styles.feature_title} mono-font`}>
          {d("home-features-1")}
        </h3>
        <p>{d("home-features-1-body")}</p>
      </div>
      <div className={styles.feature}>
        <h3 className={`${styles.feature_title} mono-font`}>
          {d("home-features-2")}
        </h3>
        <p>{d("home-features-2-body")}</p>
      </div>
      <div className={styles.feature}>
        <h3 className={`${styles.feature_title} mono-font`}>
          {d("home-features-3")}
        </h3>
        <p>{d("home-features-3-body")}</p>
      </div>
    </section>
  );
}
