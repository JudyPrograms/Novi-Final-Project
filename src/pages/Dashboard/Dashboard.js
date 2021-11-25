import React, {useEffect, useState} from 'react';
import {allUsersData} from "../../context/data";
import styles from "./Dashboard.module.css";
import Badge from "../../components/Badge/Badge";
import Card from "../../components/Card/Card";
import Table from "../../components/Table/Table";
import broom from "../../assets/badges/broom.png";
import handshake from "../../assets/badges/handshake.png";
import letter from "../../assets/badges/opener.png";
import mortar from "../../assets/badges/remedy.png";
import fuji from "../../assets/fuji.png";
import windSign from "../../assets/before-icons/windsock.png";


const DAYS_TILL_ALERT = 3

function Dashboard() {

    const [userData, setUserData] = useState({});

    useEffect(() => {
        function fetchUserData() {

            // TODO: token uit localStorage halen
            // const token = localStorage.getItem('token');

            try {
                // TODO: axios.get() request voor userData
                // token met user info meegeven in headers: {authorization: `Bearer ${token}`}
                const result = allUsersData.users[0]
                setUserData(result);
            } catch (e) {
                console.error(e);
            }
        }

        fetchUserData();
    }, [])

    return (
        <div className="dashboard-container">

            <Card
                title="DASHBOARD"
                titleImg={windSign}
                cardImg={fuji}
                large>

                {userData.currentTasks && (
                    <div className={styles["dashboard"]}>

                        <section className={styles["dashboard__upper"]}>
                            <h2 className={styles["dashboard__subtitle"]}>Current Tasks</h2>
                            {/* TODO: als een slice completed wordt, automatisch volgende slice laden*/}
                            <Table data={userData.currentTasks}
                                   col1={"subtask"}
                                   col2={"slice"}
                                   dateColumn={"startDate"}
                                   buttonColumn={"slice"}
                                   alert={DAYS_TILL_ALERT}
                                   titles={["task", "to do", "finish in", "do now!"]}/>
                        </section>

                        <div className={styles["dashboard__middle"]}>
                            <section className={styles["dashboard__badge-section"]}>
                                <h2 className={styles["dashboard__subtitle"]}>Badges</h2>
                                <div className={styles["dashboard__badges-box"]}>
                                    {/*TODO: factor '/3*100' voor badges is afhankelijk van gameInfo (coinsPerSubtask):
                                     state maken?*/}
                                    {/*TODO: Badges kunnen ook met mapping*/}
                                    <Badge text="TIDY PRINCE" image={broom}
                                           progress={Math.ceil(userData.badgeProgress.declutter / 3 * 100)}/>
                                    <Badge text="SOCIAL HERO" image={handshake}
                                           progress={Math.ceil(userData.badgeProgress.socialize / 3 * 100)}/>
                                    <Badge text="PAPER SLAYER" image={letter}
                                           progress={Math.ceil(userData.badgeProgress.paperwork / 3 * 100)}/>
                                    <Badge text="HAPPY SOUL" image={mortar}
                                           progress={Math.ceil(userData.badgeProgress.selfcare / 3 * 100)}/>
                                </div>
                            </section>
                            <section className={styles["dashboard__leaderboard"]}>
                                <h2 className={styles["dashboard__subtitle"]}>Leaderboard</h2>
                                <Table data={allUsersData.users}
                                       col1={"leaderboardPosition"}
                                       col2={"username"}
                                       col3={"level"}
                                       imgColumn={"avatarImg"}
                                       titles={["no.", "player", "level", "warrior"]}/>
                            </section>
                        </div>

                        <section className={styles["dashboard__lower"]}>
                            <h2 className={styles["dashboard__subtitle"]}>Accomplished</h2>
                            <Table data={userData.completedTasks}
                                   col1={"subtask"}
                                   col2={"slice"}
                                   col4={"coins"}
                                   titles={["task", "done", "coins", "coins"]}/>
                        </section>

                    </div>
                )}

            </Card>

            <div className="footer-hidden">footer</div>

        </div>
    );
}

export default Dashboard;