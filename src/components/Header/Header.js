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
    const [level, setLevel] = useState({})
    const [nextLevel, setNextLevel] = useState({})
    const [progress, setProgress] = useState(null)

    useEffect(() => {
        function fetchUserData() {

            // const token = localStorage.getItem('token');

            try {
                // TODO: axios.get() request voor userData
                // token met user info meegeven in headers: {authorization: `Bearer ${token}`}
                // result is userdata met welke avatar en info over progress in level
                const result = allUsersData.users.find(userObj => userObj.email === user.email)
                setUserData(result);
            } catch (e) {
                console.error(e);
            }
        }

        isAuth && fetchUserData();

    }, [user, isAuth])

    useEffect(() => {
        if (Object.keys(userData).length > 0) {
            setLevel(gameInfo.levels.find(levelObj => (levelObj.maxPoints >= userData.coinsTotal)))
            setNextLevel(gameInfo.levels.find(levelObj => (levelObj.maxPoints >= userData.coinsTotal + gameInfo.coinsPerLevel +1)))
        }
    }, [userData])

    useEffect(()=>{
        if (Object.keys(level).length > 0) {
            setProgress(Math.ceil(((gameInfo.coinsPerLevel - (level.maxPoints - userData.coinsTotal)) / gameInfo.coinsPerLevel * 100)))
        }
    }, [level, userData])

    return (
        <div className={styles["header-box"]}>
            <header className={styles["header"]}>
                <div className={styles["header__player-box"]}>
                    {isAuth ?
                        <>
                            {userData.avatarImg &&
                            <div className={styles["header__avatar-box"]}>
                                <img src={userData.avatarImg} alt="avatar"
                                     className={styles["header__avatar"]}/>
                                <p className={styles["header__name"]}>{userData.avatarName[0]}</p>
                            </div>
                            }
                            {progress !== null &&
                            <div className={styles["header__progress-box"]}>
                                <ProgressBar progress={progress} barColor="hsl(216, 20%, 59%)"/>
                                <div className={styles["header__progress-text"]}>

                                    <div className="text-left">
                                        <p>Level: {level.levelName}</p>
                                        <p>Total Coins: {userData.coinsTotal}</p>
                                    </div>
                                    <div className={styles["text-right"]}>
                                        <p>Next Level: {nextLevel.levelName}</p>
                                        <p>Coins To Earn: {level.maxPoints - userData.coinsTotal}</p>
                                    </div>
                                </div>
                            </div>
                            }
                        </>
                        :
                        <div className={styles["header__slogan"]}>
                            Making life easy, has never been easier.
                        </div>
                    }
                </div>
                <img src={logo} alt="logo" className={styles["header__app-logo"]}/>
            </header>
            <Navbar/>
        </div>
    );
}

export default Header;