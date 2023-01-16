import React from 'react';
import styles from "./style.module.css";
import {Link} from "react-router-dom";

const PromoBlock = () => {
  return (
    <div className={styles['main-title-wrap']}>
      <h1 className={styles.title}>
        Creative <span>Landing Page</span>
      </h1>
      <div className={styles.content}>
        <p className={styles.text}>
          Mi fermentum vitae posuere lectus ullamcorper amet. Nunc, erat ac eget consequat aliquet semper
          volutpat dictumst malesuada. Eu nulla ut tempus risus diam eros ornare condimentum varius.
        </p>
        <Link className={styles['read-more-link']} to='/about-us'>
          Read more about us
        </Link>
      </div>
    </div>
  );
};

export default PromoBlock;