import React from "react";
import PromoBlock from "../../kit/components/promo-block";
import AboutUsCard from "../../kit/components/about-us-card";

import styles from './style.module.css'

const HomePage = () => {
  return (
    <div className={styles['promo-block']}>
      <PromoBlock />
      <div className={styles['main-info']}>
        <AboutUsCard />
        <AboutUsCard />
        <AboutUsCard />
      </div>
    </div>
  )
}

export default HomePage