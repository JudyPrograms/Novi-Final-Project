import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import Card from "../components/Card/Card";
import Avatar from "../components/Avatar/Avatar";
import kusunoki from "../assets/avatars/kusunoki.png";
import myamoto from "../assets/avatars/myamoto.png";
import takeda from "../assets/avatars/takeda.png";
import toyotomi from "../assets/avatars/toyotomi.png";
import gong from "../assets/before-icons/gong.png";
import fuji from "../assets/fuji.png";
import {allUsersData, gameInfo} from "../context/data.js";

function Start() {

    const history = useHistory();

    const avatars = gameInfo.avatars


    const [avatar, setAvatar] = useState(null)
    const [nextSet, setNextSet] = useState(0)
    const [next, setNext] = useState(0)
    const [nextPage, setNextPage] = useState(0)

    // Deze is niet handig voor doorklikken:
    function handleButtonClick() {
        if (avatar !== null) {
            setNext(next + 1)
            setAvatar(avatar)
        }
    }

    useEffect(() => {
        function postData() {
            // const token = localStorage.getItem('token');
            if (avatar !== null && next > 0) {
                try {
                    // hieronder moet een axios.post() request komen
                    // token met user info meegeven in headers: {authorization: `Bearer ${token}`}
                    const result = "avatar posted successfully"
                    console.log(result, avatar, next)
                    // avatar wordt dan ook in de Header geladen als het goed is.
                    // daarna door naar volgende kaartje:
                    setNextPage(nextPage + 1)
                } catch (e) {
                    console.error(e);
                }
            }
        }

        postData();
    }, [avatar, next])

    return (
        <div className="start-container">

            {nextPage === 0 &&
            <Card title="Select your Warrior . . .">
                <div className="avatar-slider-box">
                <span
                    onClick={() => setNextSet(nextSet - 1)}
                    className="nav-arrow">
                        &#10094;
                </span>
                    <div className={nextSet <= 0 ? "avatar-slider" : "avatar-slider avatar-slider--next"}>

                        {/* misschien moeten deze infos in de gameInfo komen zodat dit met map gedaan kan worden:*/}
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
                    <span onClick={() => setNextSet(nextSet + 1)}
                          className="nav-arrow">
                        &#10095;
                </span>
                </div>
            </Card>
            }

            {nextPage === 1 &&
            <Card title="Now let's start . . ."
                  titleImg={gong}
                  cardImg={fuji}>
                <div className="start-text__box">
                    {avatar !== null && gameInfo.startText.map((item) => {
                        let par = item
                        console.log(avatars[0].name, avatars[0].subName)
                        // #######################################   waarom werkt deze replace niet?
                        par.replace("NAME", avatars[0].name)
                        par.replace("SUBNAME", avatars[0].subName)
                        return (
                            <p key={par.split(" ")[0]}
                               className="start-text__par">
                                {par}
                            </p>
                        );
                    })}
                </div>
            </Card>
            }


            <button
                className="nav-button"
                type="button"
                onClick={handleButtonClick}>
                NEXT
            </button>

        </div>
    );
}

export default Start;