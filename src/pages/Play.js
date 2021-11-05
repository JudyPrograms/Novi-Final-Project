import React, {useEffect, useState} from 'react';
import arch from "../assets/before-icons/arch.png";
import mountain from "../assets/mountain.png";
import target from "../assets/before-icons/target.png";
import swords from "../assets/before-icons/swords.png";
import {gameInfo, allUsersData} from "../context/data";
import SmallCardSection from "../components/SmallCardSection/SmallCardSection";
import Card from "../components/Card/Card";

// Deze pagina wordt altijd getoond na inloggen
function Play() {

    const [userData, setUserData] = useState({})
    const [sliceAmount, setSliceAmount] = useState(0);

    useEffect(() => {
        setUserData(allUsersData.users[1])
        }, [])

    useEffect(() => {
        if (userData.currentTasks) {
            console.log(userData.currentTasks)
            setSliceAmount(userData.currentTasks.length)
        }
    }, [userData])

    // function

    return (
        <div className="play-container">

            {/*als er minder dan 3 slices open staan > pick a challenge */}
            {sliceAmount < 3 &&
            <Card
                title="Pick a Challenge . . ."
                titleImg={target}
                cardImg={mountain}>
                <SmallCardSection>
                    <ul>
                        {gameInfo.tasks.map((item) => {
                            return (
                                <li key={item.taskName}>
                                    <img src={arch} alt="arch" className="card-section__link-img"/>
                                    <h2><a href="">{item.taskName}</a></h2>
                                </li>)
                        })}
                    </ul>
                </SmallCardSection>
            </Card>
            }

            {/*als er een task wordt gekozen > slice it up*/}
            <Card
                title="Slice it Up . . ."
                titleImg={swords}>
                <SmallCardSection>
                    <div>
                        hallo
                    </div>
                </SmallCardSection>
            </Card>

            {/*als er een slice meer dan 3 dagen open staat*/}
            <Card></Card>

            <div className="button-box">
                <button type="button" onClick={""}>
                    BACK
                </button>
                <button type="button" onClick={""}>
                    NEXT
                </button>
            </div>

        </div>
    );
}

export default Play;