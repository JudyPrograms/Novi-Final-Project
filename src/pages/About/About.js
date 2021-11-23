import React from 'react';
import Card from "../../components/Card/Card";
import styles from "../About/About.module.css";
import stylesLogin from "../Login/Login.module.css";
import {Link} from "react-router-dom";
import swords from "../../assets/before-icons/swords.png"

function About() {
    return (
        <div className="about-container">
            <Card small
                  title="TemperTheStorm">
                <div className={styles["about-box"]}>
                    <p className={styles["about-box__subtitle"]}>- a gamified task manager app for chaotic minds -</p>
                    <p className={styles["about-box__paragraph"]}>
                        Earn points, get rewards and celebrate progress while executing daily tasks.
                    </p>
                    <p className={styles["about-box__paragraph"]}>
                        It is time to make your inner warrior fight and temper the storm.
                    </p>
                    <img className={styles["about-box__img"]} src={swords} alt="swords"/>
                    <div className={stylesLogin["register-link"]}>
                        <Link to="/account">Register new account now</Link>
                    </div>
                </div>
            </Card>
            <div className="footer-hidden footer-hidden--small">footer</div>
        </div>
    );
}

export default About;