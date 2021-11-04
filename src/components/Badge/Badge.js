import React from 'react';
import ProgressBar from "../ProgressBar/ProgressBar";
import styles from "../Badge/Badge.module.css"

function Badge({image, progress, text}) {
    return (
        <div className={styles["badge"]}>
            <img src={image} alt="" className={styles["badge__image"]}/>
            <h5 className={styles["badge__text"]}>{text}</h5>
            <div className={styles["badge__bar"]}><ProgressBar progress={progress} barColor="hsl(213, 40%, 85%)"/></div>
        </div>
    );
}

export default Badge;