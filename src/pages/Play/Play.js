import React, {useContext, useEffect, useState} from 'react';
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
import {AuthContext} from "../../context/AuthContext";


function Play() {

    const history = useHistory();
    const {user} = useContext(AuthContext);

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
            console.log("slice amount:", userData.currentTasks.length)
            setSliceAmount(userData.currentTasks.length)
        }
    }, [userData]);

    // Als er al 3 openstaande taken zijn kan er geen nieuwe taak gekozen worden
    useEffect(() => {
        if (sliceAmount > 2) {
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
        <div className="play-container">

            {/*als er geen slices open staan > scherm: pick a challenge */}
            {sliceAmount < 3 && next === 1 &&
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


            {/*als er een task wordt gekozen && op next wordt geklikt > scherm: break it down*/}
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

            {/*als er een subtask wordt gekozen && op next wordt geklikt > scherm: slice it up
            || >>TODO: of als een slice meer dan 3 dagen open staat*/}
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