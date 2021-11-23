import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from '../../context/AuthContext';
import styles from './Navbar.module.css';

function Navbar() {
    const {isAuth, logout, user} = useContext(AuthContext);

    return (

        <nav className={styles["navbar"]}>
            {isAuth ?
                <>
                    <Link to="/play" className={styles["navbar__link"]}>PLAY</Link>
                    <Link to="/dashboard" className={styles["navbar__link"]}>DASHBOARD</Link>
                    <Link to="/account" className={styles["navbar__link"]}>ACCOUNT</Link>
                    <Link onClick={logout} to="/" className={styles["navbar__link"]}>LOGOUT</Link>
                    {user.admin === true &&
                    <Link to="/settings" className={styles["navbar__link"]}>SETTINGS</Link>
                    }
                </>
                :
                <>
                    <Link to="/about" className={styles["navbar__link"]}>ABOUT</Link>
                    <Link to="/" className={styles["navbar__link"]}>LOGIN</Link>
                </>
            }
        </nav>

    );
}

export default Navbar;