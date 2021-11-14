import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import styles from "./Start.module.css";
import Card from "../../components/Card/Card";
import Avatar from "../../components/Avatar/Avatar";
import kusunoki from "../../assets/avatars/kusunoki.png";
import myamoto from "../../assets/avatars/myamoto.png";
import takeda from "../../assets/avatars/takeda.png";
import toyotomi from "../../assets/avatars/toyotomi.png";
import gong from "../../assets/before-icons/gong.png";
import fuji from "../../assets/fuji.png";
import lightning from "../../assets/before-icons/lightning.png";
import {allUsersData, gameInfo} from "../../context/data.js";


// Wordt alleen getoond na eerste keer inloggen gebruiker
function Start() {

    const history = useHistory();
    const user = allUsersData.users[1];
    const avatars = gameInfo.avatars;

    const [avatar, setAvatar] = useState("Myamoto")
    const [nextAvatars, setNextAvatars] = useState(0)
    const [nextPage, setNextPage] = useState(0)

    // gekozen avatar in userData posten en in header zetten
    useEffect(() => {
        function postData() {
            // const token = localStorage.getItem('token');
            if (avatar !== null && nextPage === 1) {
                try {
                    setAvatar(avatar)
                    // >>TO DO: axios.post() request:
                    //     const result = await axios.post("http://endpoint", {
                    //         authorization: `Bearer ${token}`
                    //     });
                    const result = "avatar posted successfully for: " + user
                    console.log(result, avatar, nextPage)
                } catch (e) {
                    console.error(e);
                }
            }
        }

        postData();
    }, [avatar, nextPage])


    // Na 3 keer klikken doorsturen naar 'Play'
    useEffect(() => {
        if (nextPage === 3) {
            history.push("/play")
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
                    <div className={`${styles["avatar-slider"]} ${nextAvatars > 0 && `${styles["avatar-slider--next"]}`}`}>

                        {/* >>TO DO: deze infos uit de gameInfo halen en met map renderen::*/}
                        <Avatar img={kusunoki}
                                name="Kusunoki"
                                subname="The Adventurous"
                                avatar={avatar}
                                setAvatar={setAvatar}>
                        </Avatar>
                        <Avatar img={myamoto}
                                name="Myamoto"
                                subname="The Inspirator"
                                avatar={avatar}
                                setAvatar={setAvatar}>
                        </Avatar>
                        <Avatar img={takeda}
                                name="Takeda"
                                subname="The Persistant"
                                avatar={avatar}
                                setAvatar={setAvatar}>
                        </Avatar>
                        <Avatar img={toyotomi}
                                name="Toyotomi"
                                subname="The Embracing"
                                avatar={avatar}
                                setAvatar={setAvatar}>
                        </Avatar>
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
                    {avatar !== null && gameInfo.startText.map((item) => {
                        let par = item
                        console.log(avatars[0].name, avatars[0].subName)
                        // #######################################   waarom werkt deze replace niet?
                        par.replace("NAME", avatars[0].name)
                        par.replace("SUBNAME", avatars[0].subName)
                        return (
                            <p key={par.split(" ")[0]}
                               className={styles["start-text__par"]}>
                                {par}
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