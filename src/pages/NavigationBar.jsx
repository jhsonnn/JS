import React from "react";
import styles from "../style/Navigation.module.css";

function NavigationBar() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={`${styles.headerContent} ${styles.flex}`}>
          <div className={styles.headerContentLogo}>NEXON</div>
          <nav className={`${styles.headerContentNav} ${styles.flex}`}>
            <ul>
              <li>COMPANY</li>
              <li>BUSINESS</li>
              <li>PEOPLE</li>
              <li>NEWS</li>
              <li>CSR</li>
            </ul>
          </nav>
          <div
            className={`${styles.headerContentApplyLanguageNav} ${styles.flex}`}
          >
            <span
              className={`${styles.headerContentApplyBtn} ${styles.ApplyLanguageNavItems}`}
            >
              지원하기 ↗
            </span>
            <span
              className={`${styles.languageBtn} ${styles.ApplyLanguageNavItems}`}
            >
              KR
              <span className={`${styles.languageBtnArrow}`}></span>
            </span>
            <span
              className={`${styles.hamburgerBar} ${styles.ApplyLanguageNavItems}`}
            >
              <input type='button' value='&#9776;' />
            </span>
          </div>
        </div>
      </header>
    </div>
  );
}

export default NavigationBar;
