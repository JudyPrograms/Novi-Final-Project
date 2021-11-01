import React from 'react';
import styles from './CardContent.module.css';
import TitleBar from "../TitleBar/TitleBar";
import mountain from "../../assets/mountain.png";


function CardContent({children}) {
    return (
        <div className={styles["card-content"]}>
            <TitleBar/>
            <div className={styles["card-section"]}>
                {children}
                <img src={mountain} alt="mountain" className={styles["card-image"]}/>
            </div>
        </div>
    );
}

export default CardContent;