import React from 'react';
import styles from './Header.module.css';
import avatar from "../../assets/blanco-avatar.png";
import logo from "../../assets/app-logo.png";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles["header__player"]}>
                <img src={avatar} alt="avatar" className={styles["header__avatar"]}/>
                <div className={styles["header__progress-bar"]}>
                    <div className={styles["header__progress"]}>
                        65%
                    </div>
                </div>
            </div>
            <img src={logo} alt="logo" className={styles["header__app-logo"]}/>
        </header>
    );
}

export default Header;