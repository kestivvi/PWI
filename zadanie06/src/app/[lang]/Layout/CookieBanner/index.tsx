"use client";

import { useState, useEffect } from "react";
import styles from "./styles.module.css";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isBannerSeen = localStorage.getItem("cookieBannerSeen");

    if (!isBannerSeen) {
      setIsVisible(true);
    }
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
      <p>
        We value your privacy. In compliance with EU regulations, we inform you
        that our website does not use any cookies. We do not collect or store
        any personal data through cookies or similar technologies. You can
        browse our site with confidence, knowing that your privacy is fully
        protected.
      </p>
      <button className={styles.cookieBannerButton} onClick={handleAccept}>
        I understand
      </button>
    </div>
  );
};

export default CookieBanner;
