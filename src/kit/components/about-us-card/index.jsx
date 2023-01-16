import React from 'react';
import styles from "./style.module.css";
import styled from 'styled-components'

const StyledIcon = styled.span`
  background: ${props => `url(${props.iconSrc}) center center/contain no-repeat;`}
`

const ChangeText = (props) =>  {
  const {
      title,
      text,
      children
  } = props
}


const AboutUsCard = (props) => {
  return (
    <div className={styles['about-us-card']}>
      {/* <span className={styles.icon} /> */}
      <StyledIcon className={styles.icon} iconSrc={props.icon}/>
      <h2 className={styles.title}>
        About us{props.title}
      </h2>
      <p className={styles.description}>
        Vel porta ornare fermentum fames at non. Proin nunc, sagittis faucibus sagittis fringilla amet eget
        posuere. Tincidunt ultrices lectus nunc, eget. Tempus, viverra libero ac mauris lacus, risus. Pharetra
        odio eu morbi ac aliquet sem ultrices etiam sit.
        {props.children}
      </p>
    </div>
  );
};

export default AboutUsCard;