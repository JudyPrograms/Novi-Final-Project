import React from 'react';
import styles from "./PopUp.module.css";
import coin from "../../assets/yin.png";

function PopUp({id, linkClass, linkText, title, text, greeting, reward}) {

    const images = []
    for (let i = 0; i < reward; i++) {
        images.push (<img className={styles["popup__img"]} src={coin} alt="yin"/>)
    }


    return (
        <div>
            <a className={linkClass} href={`#${id}`}>{linkText}</a>
            <div id={id} className={styles["overlay"]}>
                <div className={styles["popup"]}>
                    <a className={styles["popup__close-symbol"]} href="#">&times;</a>
                    <h2 className={styles["popup__title"]}>{title}</h2>
                    {reward &&
                    <div className={styles["popup__content"]}> Reward:
                        {images}
                    </div>
                    }
                    <p className={styles["popup__content"]}>
                        {text}
                    </p>
                    <p className={styles["popup__content"]}>
                        {greeting}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PopUp;