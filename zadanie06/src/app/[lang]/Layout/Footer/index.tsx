"use client";

import { useDictionary } from "@/dictionary";
import styles from "./styles.module.css";

export default function Footer() {
  const d = useDictionary();

  return (
    <footer className={styles.footer}>
      <p>
        &copy; 2024{" "}
        <span className="product-font">
          MOON <span className="color-accent">LAKE</span>
        </span>
      </p>

      <h3>{d("footer-attributions")}</h3>
      <a href="https://www.vecteezy.com/free-png/sea-underworld-with-sun-light">
        {d("footer-attribution-hero-image-by-vecteezy")}
      </a>
      <a
        href="https://www.flaticon.com/free-icons/play-button"
        title="play button icons"
      >
        {d("footer-attribution-play-button-icons-by-flaticon")}
      </a>
      <a href="https://www.flaticon.com/free-icons/next" title="next icons">
        {d("footer-attribution-next-icons-by-roundicons")}
      </a>
      <a
        href="https://www.flaticon.com/free-icons/full-moon"
        title="full moon icons"
      >
        {d("footer-attribution-full-moon-icons-by-vectorsmarket15")}
      </a>
      <a href="https://www.flaticon.com/free-icons/rocket" title="rocket icons">
        {d("footer-attribution-rocket-icons-by-triangle-squad")}
      </a>
      <a
        href="https://www.flaticon.com/free-icons/thunder"
        title="thunder icons"
      >
        {d("footer-attribution-thunder-icons-by-freepik")}
      </a>
      <a href="https://www.flaticon.com/free-icons/laptop" title="laptop icons">
        {d("footer-attribution-laptop-icons-by-vectors-market")}
      </a>
    </footer>
  );
}
