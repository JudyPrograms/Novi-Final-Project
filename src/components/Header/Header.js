import React from 'react';
import styles from './Header.module.css';
import avatar from "../../assets/avatars/blanco-avatar.png";
import logo from "../../assets/app-logo.png";
import ProgressBar from "../ProgressBar/ProgressBar";
import {allUsersData, gameInfo} from "../../context/data.js";

function Header() {

    const progress = (allUsersData.users[0].coinsTotal / gameInfo.coinsPerLevel * 100)

    return (
        <header className={styles["header"]}>
            <div className={styles["header__player"]}>
                <img src={avatar} alt="avatar" className={styles["header__avatar"]}/>
                <ProgressBar progress={progress} barColor="hsl(216, 40%, 39%)"/>
            </div>
            <img src={logo} alt="logo" className={styles["header__app-logo"]}/>
        </header>
    );
}

export default Header;