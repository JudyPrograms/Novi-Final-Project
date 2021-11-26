import React from 'react';
import styles from "./PopUp.module.css";
import coin from "../../assets/yin.png";
import Button from "../Button/Button";

function PopUp() {
    return (
        <div>
            <Button nav>
                <a className={styles["button"]} href="#popup1">POP UP</a>
            </Button>

            <div id="popup1" className={styles["overlay"]}>
                <div className={styles["popup"]}>
                    <h2>Great work warrior!</h2>
                    <a className={styles["close"]} href="#">&times;</a>
                    <div className={styles["content"]}> Reward:
                        <img className={styles["popup__img"]} src={coin} alt="yin"/>
                        <img className={styles["popup__img"]} src={coin} alt="yin"/>
                    </div>
                    <p className={styles["content"]}>
                        Another task is finished. The storm is lying down a bit. Your are now only 14 coins away from
                        level 'Whirlwind'. Please continue your fight.
                    </p>
                    <p className={styles["content"]}>
                        Love, Toyotomi.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PopUp;