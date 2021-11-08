import React from 'react';
import {Link} from "react-router-dom";
import styles from './Navbar.module.css';

function Navbar() {
    return (

        <nav className={styles["navbar"]}>
            <Link to="/play" className={styles["navbar__link"]}>PLAY</Link>
            <Link to="/dashboard" className={styles["navbar__link"]}>DASHBOARD</Link>
            <Link to="/settings" className={styles["navbar__link"]}>SETTINGS</Link>
            <Link to="/account" className={styles["navbar__link"]}>ACCOUNT</Link>
            <Link to="/" className={styles["navbar__link"]}>LOGOUT</Link>
        </nav>

    );
}

export default Navbar;