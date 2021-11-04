import React from 'react';
import styles from './Card.module.css';
import TitleBar from "../TitleBar/TitleBar";

function Card({children, title, titleImg, cardImg, width, height}) {

    const cardStyle = {
        width: width,
        height: height,
    };

    return (
        <div className={styles["card"]} style={cardStyle}>
            <div className={styles["card__content"]}>
                <TitleBar title={title} titleImg={titleImg}/>
                <div className={styles["card__section"]}>
                {children}
                <img src={cardImg} alt={title} className={styles["card__image"]}/>
                </div>
            </div>
        </div>
    );
}

export default Card;