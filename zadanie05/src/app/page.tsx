import styles from "./page.module.css"
import Hero from "./Page/Hero";
import HeroLinks from "./Page/HeroLinks";
import Features from "./Page/Features";


export default function Home() {
  return (
    <>
      {/* <div className={styles.bg_cover}>
        <div className={styles.shadow_top}></div>
      </div> */}

      <Hero />
      <HeroLinks />

      <Features />
    </>
  );
}
