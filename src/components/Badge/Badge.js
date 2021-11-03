import React from 'react';
import ProgressBar from "../ProgressBar/ProgressBar";
import styles from "../Badge/Badge.module.css"

function Badge({image, progress, children}) {
    return (
        <div className={styles["badge"]}>
            {/*<div className={styles["badge__inner"]}/>*/}
            {/*<div className={styles["badge__circle"]}>*/}
            <img src={image} alt="" className={styles["badge__image"]}/>
            <ProgressBar progress={progress}/>
            <h5>{children}</h5>
            {/*</div>*/}
        </div>
    );
}

export default Badge;