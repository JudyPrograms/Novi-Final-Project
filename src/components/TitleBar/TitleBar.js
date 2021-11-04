import React from 'react';
import styles from "./TitleBar.module.css";


function TitleBar({title, titleImg}) {
    return (
        <div className={styles["title-bar"]}>
            <img src={titleImg} alt={title} className={styles["title-bar__title-icon"]}/>
            <h1 className={styles["title-bar__title"]}>{title}</h1>
        </div>
    );
}

export default TitleBar;