import React from 'react';
import LogoIcon from './../../shared/images/ozon-logo.png'
import styles from "./style.module.scss";

const Logo = () => {
  return (
    <a href="http://localhost:3000/" className={styles.logo}>
      <img src={LogoIcon} alt="Ozon Logo" className="logo-icon" />
    </a>
  );
};

export default Logo;