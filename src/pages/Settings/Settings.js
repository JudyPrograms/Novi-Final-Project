import React, {useEffect, useState} from 'react';
import Card from "../../components/Card/Card";
import Menu from "../../components/Menu/Menu";
import Button from "../../components/Button/Button";
import {gameInfo} from "../../context/data";
import broom from "../../assets/badges/broom.png";
import pencil from "../../assets/symbols/pencil.png";
import styles from "./Settings.module.css";

// Pagina voor administrator: aanpassen game inhoud
function Settings() {

    const mainTasks = gameInfo.tasks.map((item) => {
        return (item.taskName)
    })

    const [activeTask, setActiveTask] = useState(null)
    const [subtasks, setSubtasks] = useState([]);
    const [activeSubtask, setActiveSubTask] = useState(null);
    const [slices, setSlices] = useState([])
    const [activeSlice, setActiveSlice] = useState(null)

    const [newText, setNewText] = useState(null)
    const [newAvatar, setNewAvatar] = useState(null)


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
        if (activeSubtask !== null) {
            const task = gameInfo.tasks.find(task => task.taskName === activeTask)
            const tasks = task.subtasks[activeSubtask]
            setSlices(tasks)
        }
    }, [activeSubtask]);

    useEffect(() => {
        // TODO: PATCH text in gameInfo
        console.log("old text: ", activeSlice)
        console.log("new text: ", newText)
    }, [newText])

    useEffect(() => {
        // TODO: POST avatar in gameInfo
        console.log("new avatar: ", newAvatar)
    }, [newAvatar])

    return (
        <>
            <Card large
                  title="GAME SETTINGS"
                  titleImg={pencil}
                  cardImg={broom}>
                <div className={styles["settings__box"]}>
                    <h2 className={styles["settings__subtitle"]}>Adjust a Task</h2>
                    <Menu topic="Main Task:"
                          menuTitle={activeTask ? activeTask : "-- pick a task --"}
                          setActive={setActiveTask}
                          array={mainTasks}
                          drop
                    />
                    {activeTask != null &&
                    <Menu topic="Subtask:"
                          menuTitle={activeSubtask ? activeSubtask : "-- pick a task --"}
                          setActive={setActiveSubTask}
                          array={subtasks}
                          drop
                    />
                    }
                    {activeSubtask != null &&
                    <Menu topic="Slice:"
                          menuTitle={activeSlice ? activeSlice : "-- pick a task --"}
                          setActive={setActiveSlice}
                          array={slices}
                          drop
                    />
                    }
                    {activeSlice != null &&
                    <>
                        <Menu topic="Adjust Slice:"
                              setActive={setNewText}
                              placeholder="-- enter new slice text --"
                              type="text"
                              input
                        />
                        <div className={styles["settings__button-box"]}>
                            <Button form>ADJUST</Button>
                        </div>
                    </>
                    }
                    <h2 className={styles["settings__subtitle"]}>Upload new Avatar</h2>
                    <Menu topic="Select Image:"
                          setActive={setNewAvatar}
                          value={newAvatar}
                          placeholder="-- click here to select file --"
                          type="file"
                          input
                    />
                    <div className={styles["settings__button-box"]}>
                        <Button form>UPLOAD</Button>
                    </div>
                </div>
            </Card>
            <div className="footer-hidden footer-hidden--small">footer</div>
        </>
    );
}

export default Settings;