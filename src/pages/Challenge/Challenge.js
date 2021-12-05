import React, {useContext, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import styles from './Challenge.module.css';
import arch from "../../assets/before-icons/arch.png";
import mountain from "../../assets/mountain.png";
import target from "../../assets/before-icons/target.png";
import swords from "../../assets/before-icons/swords.png";
import shuriken from "../../assets/before-icons/shuriken.png";
import {allUsersData, gameInfo} from "../../context/data";
import Card from "../../components/Card/Card";
import Menu from "../../components/Menu/Menu";
import PopUp from "../../components/PopUp/PopUp";
import {AuthContext} from "../../context/AuthContext";


function Challenge() {

    const history = useHistory();
    const {user, openTasks} = useContext(AuthContext);

    const [userData, setUserData] = useState({});

    const [sliceAmount, setSliceAmount] = useState(0);

    const [activeTask, setActiveTask] = useState(null);
    const [subtasks, setSubtasks] = useState([]);
    const [activeSubtask, setActiveSubTask] = useState(null);
    const [slices, setSlices] = useState([])
    const [activeSlice, setActiveSlice] = useState(null)
    // TODO: activeSlice naar userData posten

    // State voor bijhouden welk scherm (1, 2 of 3)
    const [next, setNext] = useState(1);

    function handleNextButton() {
        if (next === 1 && activeTask != null) {
            setNext(next + 1)
        }
        if (next === 2 && activeSubtask != null) {
            setNext(next + 1)
        }
        if (next === 3) {
            setNext(next + 1)
        }
    }

    function handleBackButton() {
        if (next === 3) {
            setActiveSubTask(null)
            setSlices([])
        }
        if (next === 2) {
            setActiveTask(null)
            setActiveSubTask(null)
        }
        setNext(next - 1)
    }

    // Userdata binnenhalen on mount
    useEffect(() => {
        function fetchUserData() {
            // const token = localStorage.getItem('token');
            try {
                // TODO: axios.get() request voor userData
                // token met user info meegeven in headers: {authorization: `Bearer ${token}`}
                const result = allUsersData.users.find(userObj => userObj.email === user.email)
                setUserData(result);
            } catch (e) {
                console.error(e);
            }
        }

        fetchUserData();
    }, [])

    // (Aantal) Openstaande taken binnenhalen als userdata er is
    useEffect(() => {
        if (userData.currentTasks) {
            setSliceAmount(userData.currentTasks.length)
        }
    }, [userData]);

    // Als er al 3 openstaande taken zijn kan er geen nieuwe taak gekozen worden
    // TODO: User feedback geven over waarom navigatie niet kan
    useEffect(() => {
        if (sliceAmount > 2) {
            // TODO: Pop-Up: "Your warrior needs to finish a task before a new one can be started"
            console.log("not allowed to pick new challenge yet, slice amount:", userData.currentTasks.length)
            history.push("/dashboard")
        }
    }, [sliceAmount])

    // Subtaken instellen als hoofdtaak geactiveerd wordt
    useEffect(() => {
        if (activeTask !== null) {
            const task = gameInfo.tasks.find(task => task.taskName === activeTask)
            const tasks = Object.keys(task.subtasks)
            setSubtasks(tasks)
        }
    }, [activeTask]);

    // Slices instellen als subtaak geactiveerd wordt
    useEffect(() => {
        if (activeSubtask !== null && next === 2) {
            const task = gameInfo.tasks.find(task => task.taskName === activeTask)
            const tasks = task.subtasks[activeSubtask]
            setSlices(tasks)
        }
    }, [activeSubtask]);

    // Eerstvolgende slice activeren en doorsturen naar dashboard als next is geklikt
    useEffect(() => {
        if (next === 4) {
            // TODO: PATCH request waarin userData.currentTasks wordt aangepast met activeSlice
            setActiveSlice(slices[0])
            history.push("/dashboard")
        }
        if (next === 0) {
            history.push("/dashboard")
        }
    }, [next]);


    return (
        <div className="challenge-container">

            {/*als er geen slices open staan > scherm: pick a challenge */}
            {sliceAmount < 3 && next === 1 &&
            <Card
                title="Pick a Challenge . . ."
                titleImg={target}
                cardImg={mountain}>
                <ul className={styles["challenge__task-list"]}>
                    {gameInfo.tasks.map((item) => {
                        return (
                            <li key={item.taskName}
                                className={styles["challenge__list-item"]}>
                                <img src={arch} alt="arch" className={styles["challenge__list-img"]}/>
                                <h2
                                    className={`${styles["challenge__task"]} ${styles[`challenge__task--${activeTask ===
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


            {/*als er een task wordt gekozen && op next wordt geklikt > scherm: break it down*/}
            {activeTask && next === 2 &&
            <Card
                title="Break it Down . . ."
                titleImg={shuriken}>
                <div className={styles["challenge__menu-box"]}>
                <Menu menuTitle={activeSubtask ? activeSubtask : "-- pick a task --"}
                      menuImg={arch}
                      drop={true}
                      topic={activeTask}
                      setActive={setActiveSubTask}
                      array={subtasks}>
                </Menu>
                </div>
            </Card>
            }

            {/*als er een subtask wordt gekozen && op next wordt geklikt > scherm: slice it up
            || >>TODO: of als een slice meer dan 3 dagen open staat*/}
            {slices.length > 0 && next === 3 &&
            <Card
                title="Slice it Up . . ."
                titleImg={swords}>
                {/* >>TODO: activeSlice stijlen met 'bold'*/}
                <div className={styles["challenge__menu-box"]}>
                <Menu menuTitle={activeSubtask}
                      menuImg={arch}
                      topic={activeTask}
                      setActive={setActiveSlice}
                      array={slices}
                      scroll>
                </Menu>
                </div>
            </Card>
            }

            <div className={styles["challenge__button-box"]}>
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

export default Challenge;