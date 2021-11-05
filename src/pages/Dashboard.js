import React, {useEffect, useState} from 'react';
import {allUsersData} from "../context/data";
import calcDaysAgo from "../helpers/calcDaysAgo";
import Badge from "../components/Badge/Badge";
import Card from "../components/Card/Card";
import broom from "../assets/badges/broom.png";
import handshake from "../assets/badges/handshake.png";
import letter from "../assets/badges/opener.png";
import mortar from "../assets/badges/remedy.png";
import fuji from "../assets/fuji.png";
import windSign from "../assets/before-icons/windsock.png";

const DAYS_TILL_ALERT = 3

function Dashboard() {

    const [userData, setUserData] = useState({});
    console.log(userData)

    useEffect(() => {
        function fetchUserData() {

            // const token = localStorage.getItem('token');

            try {
                // hieronder moet een axios.get() request komen
                // token met user info meegeven in headers: {authorization: `Bearer ${token}`}
                const result = allUsersData.users[0]
                console.log(result)
                setUserData(result);
            } catch (e) {
                console.error(e);
            }
        }

        fetchUserData();
    }, [])

    console.log(userData)

    return (
        <div className="dashboard-container">

            <Card
                title="DASHBOARD"
                titleImg={windSign}
                cardImg={fuji}
                width="1100px"
                height="auto">

                <div className="dashboard">

                    {userData.currentTasks && (
                        <>
                            <section className="dashboard__upper">
                                <h2 className=".dashboard__subtitle">Current Tasks</h2>

                                <div className="table">
                                    <div className="table__col1">
                                        <h4>task</h4>
                                        {userData.currentTasks.map((item) => {
                                            return (<><span>{item.subtask}</span></>);
                                        })}
                                    </div>

                                    <div className="table__col2">
                                        <h4>to do</h4>
                                        {userData.currentTasks.map((item) => {
                                            return (<span>{item.slice}</span>);
                                        })}
                                    </div>
                                    <div className="table__col3">
                                        <h4>finish in</h4>
                                        {userData.currentTasks.map((item) => {
                                            const daysAgo = calcDaysAgo(item.startDate)
                                            return (<span>{DAYS_TILL_ALERT - daysAgo} days</span>);
                                        })}
                                    </div>
                                    <div className="table__col4">
                                        <h4>do now!</h4>
                                        {userData.currentTasks.map((item) => {
                                            return (<button type="button">DONE</button>);
                                        })}
                                    </div>
                                </div>
                            </section>

                            <div className="dashboard__middle">
                                <section className="dashboard__badge-section">
                                    <h2 className=".dashboard__subtitle">Badges</h2>
                                    <div className="dashboard__badges-box">
                                        <Badge text="TIDY PRINCE" image={broom}
                                               progress={userData.badgeProgress.tidyPrince * 100}/>
                                        <Badge text="SOCIAL HERO" image={handshake}
                                               progress={userData.badgeProgress.socialHero * 100}/>
                                        <Badge text="PAPER SLAYER" image={letter}
                                               progress={userData.badgeProgress.paperSlayer * 100}/>
                                        <Badge text="HAPPY SOUL" image={mortar}
                                               progress={userData.badgeProgress.happySoul * 100}/>
                                    </div>
                                </section>
                                <section className="dashboard__leaderboard">
                                    <h2 className=".dashboard__subtitle">Leaderboard</h2>
                                    {allUsersData.users.map((item) => {
                                        return (
                                            <div className="leader-row">
                                                <span>{item.leaderboardPosition}.</span>
                                                <span>{item.username}</span>
                                                <img className="leader-img" src={item.avatar} alt=""/>
                                            </div>
                                        );
                                    })}
                                </section>
                            </div>

                            <section className="dashboard__lower">
                                <h2 className=".dashboard__subtitle">Accomplished</h2>
                                <div>
                                    {userData.completedTasks.map((item) => {
                                        return (<p>{item.subtask} | {item.slice}</p>);
                                    })}
                                </div>
                            </section>
                        </>)}

                </div>

            </Card>

        </div>
    );
}

export default Dashboard;