import styles from "./styles.module.css"
import Image from "next/image";
import playButtonIcon from "@/app/img/play-button.svg";
import rightArrowIcon from "@/app/img/right-arrow.svg";

export default function HeroLinks() {
  return (
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
  )
}
