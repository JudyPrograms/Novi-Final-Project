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

    useEffect(() => {
        function fetchUserData() {

            // const token = localStorage.getItem('token');

            try {
                // hieronder moet een axios.get() request komen
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
                    <div className="dashboard">
                        <section className="dashboard__upper">
                            <h2 className=".dashboard__subtitle">Current Tasks</h2>

                            <div className="table">
                                <div className="table__col1">
                                    <h4>task</h4>
                                    {userData.currentTasks.map((item) => {
                                        return (<><span key={item.subtask}>{item.subtask}</span></>);
                                    })}
                                </div>

                                <div className="table__col2">
                                    <h4>to do</h4>
                                    {userData.currentTasks.map((item) => {
                                        return (<span key={item.slice}>{item.slice}</span>);
                                    })}
                                </div>
                                <div className="table__col3">
                                    <h4>finish in</h4>
                                    {userData.currentTasks.map((item) => {
                                        const daysAgo = calcDaysAgo(item.startDate)
                                        return (<span key={item.startDate}>{DAYS_TILL_ALERT - daysAgo} days</span>);
                                    })}
                                </div>
                                <div className="table__col4">
                                    <h4>do now!</h4>
                                    {userData.currentTasks.map((item) => {
                                        return (<button key={item.subtask} type="button">DONE</button>);
                                    })}
                                </div>
                            </div>
                        </section>

                        <div className="dashboard__middle">
                            <section className="dashboard__badge-section">
                                <h2 className="dashboard__subtitle">Badges</h2>
                                <div className="dashboard__badges-box">
                                    <Badge text="TIDY PRINCE" image={broom}
                                            // deze factor '/3*100' is afhankelijk van gameInfo: ergens als state*/}
                                            // variabele opslaan?:*/
                                           progress={userData.badgeProgress.declutter / 3 * 100}/>
                                    <Badge text="SOCIAL HERO" image={handshake}
                                           progress={userData.badgeProgress.socialize / 3 * 100}/>
                                    <Badge text="PAPER SLAYER" image={letter}
                                           progress={userData.badgeProgress.paperwork / 3 * 100}/>
                                    <Badge text="HAPPY SOUL" image={mortar}
                                           progress={userData.badgeProgress.selfcare / 3 * 100}/>
                                </div>
                            </section>

                            <section className="dashboard__leaderboard">
                                <h2 className=".dashboard__subtitle">Leaderboard</h2>
                                {allUsersData.users.map((item) => {
                                    return (
                                        <div key={item.username} className="leader-row">
                                            <span key={item.leaderboardPosition}>{item.leaderboardPosition}.</span>
                                            <span key={item.username}>{item.username}</span>
                                            <img key={item.avatarImg} className="leader-img" src={item.avatarImg} alt=""/>
                                        </div>
                                    );
                                })}
                            </section>
                        </div>

                        <section className="dashboard__lower">
                            <h2 className=".dashboard__subtitle">Accomplished</h2>
                            <div>
                                {userData.completedTasks.map((item) => {
                                    return (<p key={item.slice}>{item.subtask} | {item.slice}</p>);
                                })}
                            </div>
                        </section>
                    </div>)}

            </Card>
            <div className="footer-hidden">footer</div>

        </div>
    );
}

export default Dashboard;