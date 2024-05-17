import React from "react";
import logoStyles from "../Header/Header.module.css";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <img className={logoStyles.logo} src="/favicon.ico" alt="logo" />
      <h3>© Gift Fantasy - 2023</h3>
    </footer>
  );
}

export default Footer;
