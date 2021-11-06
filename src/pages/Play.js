import React, {useEffect, useState} from 'react';
import arch from "../assets/before-icons/arch.png";
import mountain from "../assets/mountain.png";
import target from "../assets/before-icons/target.png";
import swords from "../assets/before-icons/swords.png";
import shuriken from "../assets/before-icons/shuriken.png";
import {gameInfo, allUsersData} from "../context/data";
import SmallCardSection from "../components/SmallCardSection/SmallCardSection";
import Card from "../components/Card/Card";

// Deze pagina wordt altijd getoond na inloggen
function Play() {

    const [userData, setUserData] = useState({});
    const [sliceAmount, setSliceAmount] = useState(0);
    const [activeTask, setActiveTask] = useState(null);
    const [activeSubtask, setActiveSubTask] = useState(null)
    const [subtasks, setSubtasks] = useState([])
    const [next, setNext] = useState(0);


    useEffect(() => {
        setUserData(allUsersData.users[1])
    }, []);

    useEffect(() => {
        if (userData.currentTasks) {
            setSliceAmount(userData.currentTasks.length)
        }
    }, [userData]);

    useEffect(() => {
        console.log("useEffect activeTask not null:" + (activeTask !== null))
        if (activeTask !== null) {
            gameInfo.tasks.map((item) => {
                if (item.taskName === activeTask) {
                    const tasks = Object.keys(item.subtasks);
                    setSubtasks(tasks);
                }
            });
        }
    }, [activeTask]);


    return (
        <div className="play-container">

            {/*als er minder dan 3 slices open staan > pick a challenge */}
            {sliceAmount < 3 && next === 0 &&
            <Card
                title="Pick a Challenge . . ."
                titleImg={target}
                cardImg={mountain}>
                <SmallCardSection>
                    <ul>
                        {gameInfo.tasks.map((item) => {
                            return (
                                <li key={item.taskName}>
                                    <img src={arch} alt="arch" className="card-section__list-img"/>
                                    {/* WAAROM WERKT :HOVER (CARD SECTION.CSS) HIER NIET MEER?*/}
                                    <h2
                                        className="card-section__task"
                                        style={{fontWeight: activeTask === item.taskName ? "bold" : "normal"}}
                                        onClick={() => setActiveTask(item.taskName)}>
                                        {item.taskName}
                                    </h2>
                                </li>
                            );
                        })}
                    </ul>

                </SmallCardSection>
            </Card>
            }

            {/*als er een task wordt gekozen && op next wordt geklikt*/}
            {activeTask && next === 1 &&
            <Card
                title="Break it Down . . ."
                titleImg={shuriken}>
                <SmallCardSection>
                    <h1 className="card-section__active-task">{activeTask}</h1>
                    <select
                        name="drop-down"
                        id="drop-down"
                        onChange={e => setActiveSubTask(e.target.value)}
                        className="card-section__select">
                        <option defaultValue="pick">-- pick a task --</option>
                        {subtasks.length > 0 && subtasks.map((item) => {
                            return (
                                <option
                                    key={item}
                                    value={item}
                                    className="drop-down__option">
                                    {item}
                                </option>
                            );
                        })}
                    </select>
                    <img src={arch} alt="arch" className="card-section__arch"/>
                </SmallCardSection>
            </Card>
            }

            {/*als er een subtask wordt gekozen && op next wordt geklikt || of een slice meer dan 3 dagen open staat*/}
            {activeSubtask !== null && next === 2 &&
            <Card
                title="Slice it Up . . ."
                titleImg={swords}>
                <SmallCardSection>
                    <h1 className="card-section__active-task">{activeTask}</h1>
                    <div className="card-section__slice-box">
                    <span className="card-section__select" style={{width: "100%"}}>
                        {activeSubtask}
                    </span>
                    <span>slice1</span>
                    <span>slice2</span>
                    <span>slice3</span>
                    </div>
                    <img src={arch} alt="arch" className="card-section__arch"/>
                </SmallCardSection>
            </Card>
            }

            <div className="button-box">
                <button type="button" onClick={() => setNext(next - 1)}>
                    BACK
                </button>
                <button type="button" onClick={() => setNext(next + 1)}>
                    NEXT
                </button>
            </div>

        </div>
    );
}

export default Play;