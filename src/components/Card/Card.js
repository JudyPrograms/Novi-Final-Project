import React from 'react';
import styles from './Card.module.css';
import TitleBar from "../TitleBar/TitleBar";
import createAlt from "../../helpers/createAlt";

function Card({children, title, titleImg, cardImg, large, small}) {

    return (
        <div className={`${styles["card"]} ${large && styles["card--large"]} ${small && styles["card--small"]}`}>
            <div className={styles["card__content"]}>
                <TitleBar title={title} titleImg={titleImg}/>
                <div className={styles["card__section"]}>
                    {children}
                    {cardImg && <img src={cardImg} alt={createAlt(cardImg)} className={styles["card__image"]}/>}
                </div>
            </div>
        </div>
    );
}

export default Card;