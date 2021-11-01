import React from 'react';
import styles from './CardContent.module.css';
import TitleBar from "../TitleBar/TitleBar";


function CardContent({title, titleImg, cardImg, children}) {
    return (
        <div className={styles["card-content"]}>
            <TitleBar title={title} titleImg={titleImg}/>
            <div className={styles["card-section"]}>
                {children}
                <img src={cardImg} alt={cardImg.toString()} className={styles["card-image"]}/>
            </div>
        </div>
    );
}

export default CardContent;