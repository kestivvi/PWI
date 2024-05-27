"use client";

import styles from "./styles.module.css";
import Image from "next/image";
import rocketIcon from "@/app/img/rocket.webp";
import lightningIcon from "@/app/img/lightning.webp";
import laptopIcon from "@/app/img/laptop.png";
import heroImage from "@/app/img/hero-1024.webp";
import { useDictionary } from "@/dictionary";

export default function Hero() {
  const d = useDictionary();

  return (
    <section className={styles.hero}>
      <div>
        <h1 className={`${styles.hero_header} product-font`}>
          JAVASCRIPT <span className="color-accent">FRAMEWORK</span>
        </h1>
        <div className={`${styles.hero_text} mono-font`}>
          <h2
            className={`${styles.hero_subheader} ${styles.flex_row_align_center}`}
          >
            <Image className={styles.icon} src={rocketIcon} alt="rocket icon" />
            {d("hero-phrases-blazingly-fast-dynamic")}
          </h2>
          <h2
            className={`${styles.hero_subheader} ${styles.flex_row_align_center}`}
          >
            <Image
              className={styles.icon}
              src={lightningIcon}
              alt="lightning icon"
            />
            {d("hero-phrases-progressive-adaptive-edge")}
          </h2>
          <h2
            className={`${styles.hero_subheader} ${styles.flex_row_align_center}`}
          >
            <Image className={styles.icon} src={laptopIcon} alt="laptop icon" />
            {d("hero-phrases-front-end-powerhouse")}
          </h2>
        </div>
      </div>

      <div className={styles.hero_image_div}>
        <div className={styles.shadow_1}></div>
        <div className={styles.shadow_2}></div>
        <Image
          src={heroImage}
          alt="hero"
          className={styles.hero_image}
          priority
        />
      </div>
    </section>
  );
}
