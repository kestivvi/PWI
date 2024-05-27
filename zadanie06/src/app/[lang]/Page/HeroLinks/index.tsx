"use client";

import styles from "./styles.module.css";
import Image from "next/image";
import playButtonIcon from "@/app/img/play-button.svg";
import rightArrowIcon from "@/app/img/right-arrow.svg";
import { useDictionary } from "@/dictionary";
import CustomLink from "@/components/CustomLink";

export default function HeroLinks() {
  const d = useDictionary();

  return (
    <div className={styles.hero_links}>
      <CustomLink href="/about">
        <div className={`${styles.link} ${styles.accent_link}`}>
          <Image
            className={styles.play_button}
            src={playButtonIcon}
            alt="play button"
          />
          {d("hero-links-why-moon-lake")}
        </div>
      </CustomLink>
      <CustomLink href="/docs">
        <div className={styles.link}>
          {d("hero-links-get-started")}
          <Image
            className={styles.right_arrow}
            src={rightArrowIcon}
            alt="right arrow"
          />
        </div>
      </CustomLink>
    </div>
  );
}
