"use client";

import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { useDictionary } from "@/dictionary";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const d = useDictionary();

  useEffect(() => {
    const isBannerSeen = localStorage.getItem("cookieBannerSeen");
    if (isVisible !== !isBannerSeen) setIsVisible(!isBannerSeen);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieBannerSeen", "true");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.cookieBanner}>
      <p>{d("cookies-banner-text")}</p>
      <button className={styles.cookieBannerButton} onClick={handleAccept}>
        {d("cookies-banner-button")}
      </button>
    </div>
  );
};

export default CookieBanner;
