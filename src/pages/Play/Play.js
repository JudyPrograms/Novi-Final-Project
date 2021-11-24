import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import styles from './Play.module.css';
import arch from "../../assets/before-icons/arch.png";
import mountain from "../../assets/mountain.png";
import target from "../../assets/before-icons/target.png";
import swords from "../../assets/before-icons/swords.png";
import shuriken from "../../assets/before-icons/shuriken.png";
import {allUsersData, gameInfo} from "../../context/data";
import Card from "../../components/Card/Card";
import Menu from "../../components/Menu/Menu";


function Play() {

    const history = useHistory();

    const [userData, setUserData] = useState({});

    const [sliceAmount, setSliceAmount] = useState(0);

    const [activeTask, setActiveTask] = useState(null);
    const [subtasks, setSubtasks] = useState([]);
    const [activeSubtask, setActiveSubTask] = useState(null);
    const [slices, setSlices] = useState([])
    const [activeSlice, setActiveSlice] = useState(null)
    // Zie regel 93 voor activeSlice

    // state voor bijhouden welk scherm (1, 2 of 3)
    const [next, setNext] = useState(1);

    function handleNextButton () {
        if (next === 1 && activeTask != null) {
            setNext(next + 1)
        }
        if (next ===2 && activeSubtask != null) {
            setNext(next + 1)
        }
        if (next === 3) {
            setNext(next + 1)
        }
    }

    function handleBackButton () {
        if (next === 3) {
            setActiveSubTask(null)
            setSlices([])
        }
        if (next === 2) {
            setActiveTask(null)
        }
        setNext(next - 1)
    }

    // userdata binnenhalen on mount
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

    // (aantal) openstaande taken binnenhalen als userdata er is
    useEffect(() => {
        if (userData.currentTasks) {
            setSliceAmount(userData.currentTasks.length)
        }
    }, [userData]);

    // subtaken instellen als hoofdtaak geactiveerd wordt
    useEffect(() => {
        console.log("useEffect activeTask not null:" + (activeTask !== null))
        console.log("next:", next)
        if (activeTask !== null) {
            const task = gameInfo.tasks.find(task => task.taskName === activeTask)
            const tasks = Object.keys(task.subtasks)
            setSubtasks(tasks)
        }
    }, [activeTask]);

    // slices instellen als subtaak geactiveerd wordt
    useEffect(() => {
        console.log("useEffect activeSubtask not null:" + (activeSubtask !== null))
        console.log("next:", next)
        if (activeSubtask !== null && next === 2) {
            const task = gameInfo.tasks.find(task => task.taskName === activeTask)
            const tasks = task.subtasks[activeSubtask]
            setSlices(tasks)
        }
    }, [activeSubtask]);

    // eerstvolgende slice activeren en doorsturen naar dashboard als 3x next is geklikt
    useEffect(() => {
        if (next === 4 || next === 0) {
            // >>TO DO: PATCH request waarin userData.currentTasks wordt aangepast met activeSlice
            // >>TO DO: dit moet eigenlijk aan de hand van dynamische userData.completedTasks:
            setActiveSlice(slices[0])
            history.push("/dashboard")
        }
    }, [next]);


    return (
        <div className="play-container">

            {/*als er geen slices open staan > pick a challenge */}
            {sliceAmount < 1 && next === 1 &&
            <Card
                title="Pick a Challenge . . ."
                titleImg={target}
                cardImg={mountain}>
                <ul className={styles["card-list"]}>
                    {gameInfo.tasks.map((item) => {
                        return (
                            <li key={item.taskName}
                                className={styles["card-list__item"]}>
                                <img src={arch} alt="arch" className={styles["card-list__img"]}/>
                                {/* >>TO DO: WAAROM WERKT :HOVER (CARD-LIST__TASK) HIER NIET MEER?*/}
                                <h2
                                    className={`${styles["card-list__task"]} ${styles[`card-list__task--${activeTask ===
                                    item.taskName ? "active" : "inactive"}`]}`}
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
            {activeTask && next === 2 &&
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
            || >>TO DO: of een slice meer dan 3 dagen open staat > slice it up*/}
            {slices.length > 0 && next === 3 &&
            <Card
                title="Slice it Up . . ."
                titleImg={swords}>
                {/* >>TO DO: activeSlice stijlen met 'bold'*/}
                <Menu menuTitle={activeSubtask}
                      menuImg={arch}
                      drop={false}
                      active={activeTask}
                      setActive={setActiveSlice}
                      array={slices}>
                </Menu>
            </Card>
            }

            <div className={styles["button-box"]}>
                <button
                    type="button"
                    onClick={handleBackButton}
                    className="nav-button">
                    BACK
                </button>
                <button
                    type="button"
                    onClick={handleNextButton}
                    className="nav-button">
                    NEXT
                </button>
            </div>

        </div>
    );
}

export default Play;