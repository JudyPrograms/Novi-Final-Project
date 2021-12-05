import React, {useContext, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import styles from "./Start.module.css";
import Card from "../../components/Card/Card";
import Avatar from "../../components/Avatar/Avatar";
import gong from "../../assets/before-icons/gong.png";
import fuji from "../../assets/fuji.png";
import lightning from "../../assets/before-icons/lightning.png";
import {AuthContext} from "../../context/AuthContext";
import {gameInfo} from "../../context/data.js";


// Wordt alleen getoond na eerste keer inloggen gebruiker
function Start() {

    const history = useHistory();
    const {user} = useContext(AuthContext);

    const avatars = gameInfo.avatars;

    const [avatar, setAvatar] = useState(avatars[1])
    const [nextAvatars, setNextAvatars] = useState(0)
    const [nextPage, setNextPage] = useState(0)

    // Gekozen avatar in userData posten en in header zetten
    useEffect(() => {
        function postData() {
            // TODO: token uit local storage halen
            // const token = localStorage.getItem('token');
            if (nextPage === 1) {
                try {
                    setAvatar(avatar)
                    // TODO: axios.patch() request om avatar aan te passen
                    // const result = await axios.patch("http://endpoint", {
                    //     authorization: `Bearer ${token}`
                    // });
                    const result = "avatar posted successfully for: " + user.username
                    console.log(result, avatar)
                } catch (e) {
                    console.error(e);
                }
            }
        }

        postData();
    }, [avatar, nextPage])


    // Na doorlopen van Start (= 3 keer klikken), doorsturen naar 'Challenge'
    useEffect(() => {
        if (nextPage === 3) {
            history.push("/challenge")
        }
    }, [nextPage])


    return (
        <div className="start-container">

            {/* eerste scherm*/}
            {nextPage === 0 &&
            <Card title="Select your Warrior . . .">
                <div className={styles["avatar-slider-box"]}>
                <span
                    onClick={() => setNextAvatars(nextAvatars - 1)}
                    className={styles["nav-arrow"]}>
                        &#10094;
                </span>
                    <div
                        className={`${styles["avatar-slider"]} ${nextAvatars > 0 && `${styles["avatar-slider--next"]}`}`}>
                        {avatars.map((item) => {
                            return (
                                <Avatar
                                    key={item.name}
                                    img={item.image}
                                    name={item.name}
                                    subname={item.subName}
                                    avatar={avatar}
                                    setAvatar={setAvatar}
                                    object={item}
                                />
                            );
                        })}
                    </div>
                    <span onClick={() => setNextAvatars(nextAvatars + 1)}
                          className={styles["nav-arrow"]}>
                        &#10095;
                </span>
                </div>
            </Card>
            }

            {/* tweede scherm */}
            {nextPage === 1 &&
            <Card title="Now let's start . . ."
                  titleImg={gong}
                  cardImg={fuji}>
                <div className={styles["start-text__box"]}>
                    {gameInfo.startText.map((item) => {
                        item = item.replace("NAME", avatar.name)
                        item = item.replace("SUBNAME", avatar.subName)
                        return (
                            <p key={item.split(" ")[0]}
                               className={styles["start-text__par"]}>
                                {item}
                            </p>
                        );
                    })}
                </div>
            </Card>
            }

            {/* derde scherm */}
            {nextPage === 2 &&
            <Card
                title="How to Play . . ."
                titleImg={lightning}
                cardImg={fuji}>
                <div className={styles["how-to__box"]}>
                    {/*TODO: icons bij tekst plaatsen*/}
                    <p className={styles["how-to__par"]}>Earn yin coins by bringing tasks to an end</p>
                    <p className={styles["how-to__par"]}>Double coins when completing a set of 6 subtasks</p>
                    <p className={styles["how-to__par"]}>Level up each 40 yin coins</p>
                    <p className={styles["how-to__par"]}>Acquire special badges along the way</p>
                </div>
            </Card>
            }

            <button
                className="nav-button"
                type="button"
                onClick={() => setNextPage(nextPage + 1)}>
                NEXT
            </button>

        </div>
    );
}

export default Start;