import React from 'react';
import styles from "./TitleBar.module.css";
import target from "../../assets/target.png";


function TitleBar() {
    return (
        <div className={styles["title-bar"]}>
            <img src={target} alt="target" className={styles["title-bar__title-icon"]}/>
            <h1 className={styles["title-bar__title"]}>Pick a Challenge</h1>
        </div>
    );
}

export default TitleBar;