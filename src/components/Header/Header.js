import React, {useContext, useEffect, useState} from 'react';
import styles from './Header.module.css';
// import avatar from "../../assets/avatars/blanco-avatar.png";
import logo from "../../assets/app-logo.png";
import ProgressBar from "../ProgressBar/ProgressBar";
import {allUsersData, gameInfo} from "../../context/data.js";
import {AuthContext} from '../../context/AuthContext';
import Navbar from "../Navbar/Navbar";


function Header() {

    const {isAuth, user} = useContext(AuthContext);

    const [userData, setUserData] = useState({});
    const progress = (userData.coinsTotal / gameInfo.coinsPerLevel * 100)

    useEffect(() => {
        function fetchUserData() {

            // const token = localStorage.getItem('token');

            try {
                // hieronder moet een axios.get() request komen
                // token met user info meegeven in headers: {authorization: `Bearer ${token}`}
                const index = allUsersData.users.findIndex(person => person.email === user.email)
                const result = allUsersData.users[index]
                setUserData(result);
            } catch (e) {
                console.error(e);
            }
        }
            isAuth && fetchUserData();

    }, [user, isAuth])


    return (
        <div className={styles["header-box"]}>
            <header className={styles["header"]}>
                <div className={styles["header__player"]}>
                    {isAuth &&
                    <>
                        <img src={userData.avatarImg} alt="avatar"
                             className={styles["header__avatar"]}/>
                        <ProgressBar progress={progress} barColor="hsl(216, 40%, 39%)"/>
                    </>
                    }
                </div>
                <img src={logo} alt="logo" className={styles["header__app-logo"]}/>
            </header>
            <Navbar/>
        </div>
    );
}

export default Header;