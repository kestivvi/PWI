import styles from "./page.module.css"
import Image from "next/image";

import rocketIcon from "./img/rocket.webp";
import lightningIcon from "./img/lightning.webp";
import laptopIcon from "./img/laptop.png";
import heroImage from "./img/hero-1024.webp";
import playButtonIcon from "./img/play-button.svg";
import rightArrowIcon from "./img/right-arrow.svg";


export default function Home() {
  return (
    <>
      <div className={styles.bg_cover}>
        <div className={styles.shadow_top}></div>
      </div>

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

      <div className={styles.hero_links}>
        <div className={`${styles.link} ${styles.accent_link}`}>
          <Image className={styles.play_button} src={playButtonIcon} alt="play button" />
          Why Moon Lake?
        </div>
        <div className={styles.link}>
          Get Started
          <Image className={styles.right_arrow} src={rightArrowIcon} alt="right arrow" />
        </div>
      </div>


      <main>

        <section className={styles.features}>
          <div className={styles.feature}>
            <h3 className={`${styles.feature_title} mono-font`}>Adaptable</h3>
            <p>
              Elevate your projects with a framework that boasts unparalleled adaptability, effortlessly
              accommodating diverse requirements and scaling with your ambitions.
            </p>
          </div>
          <div className={styles.feature}>
            <h3 className={`${styles.feature_title} mono-font`}>Performant</h3>
            <p>
              Efficiently streamline your development process with a framework that prioritizes optimal
              performance, ensuring swift and responsive user experiences.
            </p>
          </div>
          <div className={styles.feature}>
            <h3 className={`${styles.feature_title} mono-font`}>Versatile</h3>
            <p>
              Unleash the power of simplicity and versatility as our framework empowers you to build dynamic,
              feature-rich applications with ease.
            </p>
          </div>
        </section>

      </main>
    </>
  );
}