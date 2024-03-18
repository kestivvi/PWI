import styles from "./styles.module.css"
import Image from "next/image";
import rocketIcon from "@/app/img/rocket.webp";
import lightningIcon from "@/app/img/lightning.webp";
import laptopIcon from "@/app/img/laptop.png";
import heroImage from "@/app/img/hero-1024.webp";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div>
        <h1 className={`${styles.hero_header} product-font`}>
          JAVASCRIPT <span className="color-accent">FRAMEWORK</span>
        </h1>
        <div className={`${styles.hero_text} mono-font`}>
          <h2 className={`${styles.hero_subheader} ${styles.flex_row_align_center}`}>
            <Image className={styles.icon} src={rocketIcon} alt="rocket icon" />
            Blazingly Fast Dynamic
          </h2>
          <h2 className={`${styles.hero_subheader} ${styles.flex_row_align_center}`}>
            <Image className={styles.icon} src={lightningIcon} alt="lightning icon" />
            Progressive Adaptive Edge
          </h2>
          <h2 className={`${styles.hero_subheader} ${styles.flex_row_align_center}`}>
            <Image className={styles.icon} src={laptopIcon} alt="laptop icon" />
            Frontend Powerhouse
          </h2>
        </div>
      </div>

      <div className={styles.hero_image_div}>
        <div className={styles.shadow_1}></div>
        <div className={styles.shadow_2}></div>
        <Image src={heroImage} alt="hero" className={styles.hero_image} />
      </div>

    </section>
  )
}