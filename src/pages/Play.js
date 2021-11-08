import React, {useEffect, useState} from 'react';
import arch from "../assets/before-icons/arch.png";
import mountain from "../assets/mountain.png";
import target from "../assets/before-icons/target.png";
import swords from "../assets/before-icons/swords.png";
import shuriken from "../assets/before-icons/shuriken.png";
import {gameInfo, allUsersData} from "../context/data";
import Card from "../components/Card/Card";
import Menu from "../components/Menu/Menu";


// Deze pagina wordt altijd getoond na inloggen
function Play() {

    const [userData, setUserData] = useState({});

    const [sliceAmount, setSliceAmount] = useState(0);

    const [activeTask, setActiveTask] = useState(null);
    const [subtasks, setSubtasks] = useState([]);
    const [activeSubtask, setActiveSubTask] = useState(null);
    const [slices, setSlices]= useState([])
    const [activeSlice, setActiveSlice] = useState(null)

    const [next, setNext] = useState(0);


    // function handleBackButton () {
    //     setNext(next - 1)
    //     subtask resetten
    // }

    useEffect(() => {
        function fetchUserData() {

            // const token = localStorage.getItem('token');

            try {
                // hieronder moet een axios.get() request komen
                // token met user info meegeven in headers: {authorization: `Bearer ${token}`}
                const result = allUsersData.users[1]
                setUserData(result);
            } catch (e) {
                console.error(e);
            }
        }

        fetchUserData();
    }, [])

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

    useEffect(() => {
        console.log("useEffect activeSubtask not null:" + (activeSubtask !== null))
        if (activeSubtask !== null) {
            gameInfo.tasks.map((item) => {
                if (item.taskName === activeTask) {
                    const tasks = item.subtasks[activeSubtask];
                    setSlices(tasks);
                }
            });
        }
    }, [activeSubtask]);


    return (
        <div className="play-container">

            {/*als er minder dan 3 slices open staan > pick a challenge */}
            {sliceAmount < 3 && next === 0 &&
            <Card
                title="Pick a Challenge . . ."
                titleImg={target}
                cardImg={mountain}>
                <ul className="card-list">
                    {gameInfo.tasks.map((item) => {
                        return (
                            <li key={item.taskName}
                                className="card-list__item">
                                <img src={arch} alt="arch" className="card-list__img"/>
                                {/* WAAROM WERKT :HOVER (CARD-LIST__TASK) HIER NIET MEER?*/}
                                <h2
                                    className={`card-list__task card-list__task--${activeTask === item.taskName ? "active" : "inactive"}`}
                                    onClick={() => setActiveTask(item.taskName)}>
                                    {item.taskName}
                                </h2>
                            </li>
                        );
                    })}
                </ul>
            </Card>
            }

            {/*als er een task wordt gekozen && op next wordt geklikt > break it down*/}
            {activeTask && next === 1 &&
            <Card
                title="Break it Down . . ."
                titleImg={shuriken}>
                <Menu menuTitle={activeSubtask ? activeSubtask : "-- pick a task --"}
                      menuImg={arch}
                      drop={true}
                      active={activeTask}
                      setActive={setActiveSubTask}
                      array={subtasks}>
                </Menu>
            </Card>
            }

            {/*als er een subtask wordt gekozen && op next wordt geklikt
            || of een slice meer dan 3 dagen open staat > slice it up*/}
            {activeSubtask !== null && next === 2 &&
            <Card
                title="Slice it Up . . ."
                titleImg={swords}>
                <Menu menuTitle={activeSubtask}
                      menuImg={arch}
                      drop={false}
                      active={activeTask}
                      setActive={setActiveSlice}
                      array={slices}>
                </Menu>
                <p>{activeSlice}</p>
            </Card>
            }

            <div className="button-box">
                <button
                    type="button"
                    onClick={() => setNext(next - 1)}
                    className="nav-button">
                    BACK
                </button>
                <button
                    type="button"
                    onClick={() => setNext(next + 1)}
                    className="nav-button">
                    NEXT
                </button>
            </div>

        </div>
    );
}

export default Play;