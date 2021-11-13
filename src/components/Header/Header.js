import React, {useEffect, useState} from 'react';
import styles from './Header.module.css';
import avatar from "../../assets/avatars/blanco-avatar.png";
import logo from "../../assets/app-logo.png";
import ProgressBar from "../ProgressBar/ProgressBar";
import {allUsersData, gameInfo} from "../../context/data.js";
import Navbar from "../Navbar/Navbar";

function Header() {

    const [userData, setUserData] = useState({});
    const progress = (userData.coinsTotal / gameInfo.coinsPerLevel * 100)

    useEffect(() => {
        function fetchUserData() {

            // const token = localStorage.getItem('token');

            try {
                // hieronder moet een axios.get() request komen
                // token met user info meegeven in headers: {authorization: `Bearer ${token}`}
                const result = allUsersData.users[0]
                setUserData(result);
            } catch (e) {
                console.error(e);
            }
        }

        fetchUserData();
    }, [])


    return (
        <div className={styles["header-box"]}>
            <header className={styles["header"]}>
                <div className={styles["header__player"]}>
                    <img src={userData.avatarImg ? userData.avatarImg : avatar} alt="avatar" className={styles["header__avatar"]}/>
                    <ProgressBar progress={progress} barColor="hsl(216, 40%, 39%)"/>
                </div>
                <img src={logo} alt="logo" className={styles["header__app-logo"]}/>
            </header>
            <Navbar/>
        </div>
    );
}

export default Header;