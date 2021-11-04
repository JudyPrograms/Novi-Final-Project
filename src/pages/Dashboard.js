import React from 'react';
import {userData} from "../context/data";
import Badge from "../components/Badge/Badge";
import Card from "../components/Card/Card";
import broom from "../assets/badges/broom.png";
import handshake from "../assets/badges/handshake.png";
import letter from "../assets/badges/opener.png";
import mortar from "../assets/badges/remedy.png";
import fuji from "../assets/fuji.png";
import windSign from "../assets/before-icons/windsock.png";


function Dashboard() {

    const user = userData.users[0];

    let today = new Date();
    today.setHours(0, 0, 0, 0)
    const msInDay = 24 * 60 * 60 * 1000


    return (
        <div className="dashboard-container">

            <Card
                title="DASHBOARD"
                titleImg={windSign}
                cardImg={fuji}
                width="90%"
                height="auto">

                <div className="dashboard">

                    <section className="dashboard__upper">
                        <h2 className=".dashboard__subtitle">Current Tasks</h2>

                        <div className="table">
                            <div className="table__col1">
                                <h4>task</h4>
                                {user.currentTasks.map((item) => {
                                    return (<><span>{item.subtask}</span></>);
                                })}
                            </div>

                            <div className="table__col2">
                                <h4>to do</h4>
                                {user.currentTasks.map((item) => {
                                    return (<span>{item.slice}</span>);
                                })}
                            </div>
                            <div className="table__col3">
                                <h4>finish in</h4>
                                {user.currentTasks.map((item) => {
                                    let start = new Date(item.startDate)
                                    start.setHours(0, 0, 0, 0)
                                    const daysAgo = (today - start) / (msInDay);
                                    return (<span>{3 - daysAgo} days</span>);
                                })}
                            </div>
                            <div className="table__col4">
                                <h4>do now!</h4>
                                {user.currentTasks.map((item) => {
                                    return (<button type="button">DONE</button>);
                                })}
                            </div>
                        </div>
                    </section>

                    <div className="dashboard__middle">
                        <section className="dashboard__badge-section">
                            <h2 className=".dashboard__subtitle">Badges</h2>
                            <div className="dashboard__badges-box">
                                <Badge text="TIDY PRINCE" image={broom} progress={user.badgeProgress.tidyPrince * 100}/>
                                <Badge text="SOCIAL HERO" image={handshake}
                                       progress={user.badgeProgress.socialHero * 100}/>
                                <Badge text="PAPER SLAYER" image={letter}
                                       progress={user.badgeProgress.paperSlayer * 100}/>
                                <Badge text="HAPPY SOUL" image={mortar} progress={user.badgeProgress.happySoul * 100}/>
                            </div>
                        </section>
                        <section className="dashboard__leaderboard">
                            <h2 className=".dashboard__subtitle">Leaderboard</h2>
                            {userData.users.map((item) => {
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
                            {user.completedTasks.map((item) => {
                                return (<p>{item.subtask} | {item.slice}</p>);
                            })}
                        </div>
                    </section>

                </div>

            </Card>

        </div>
    );
}

export default Dashboard;