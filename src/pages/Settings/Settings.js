import React, {useEffect, useState} from 'react';
import Card from "../../components/Card/Card";
import Menu from "../../components/Menu/Menu";
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

    return (
        <>
            <Card large
                  title="GAME SETTINGS"
                  titleImg={pencil}
                  cardImg={broom}>
                <div className={styles["settings__menus-box"]}>
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
                    <Menu topic="Adjust Text:"
                          setActive={setNewText}
                          placeholder="-- enter new slice text --"
                          input
                    />
                    }
                </div>
            </Card>
            <div className="footer-hidden footer-hidden--small">footer</div>
        </>
    );
}

export default Settings;