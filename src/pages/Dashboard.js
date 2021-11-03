import React from 'react';
import {userData} from "../context/data";
import TitleBar from "../components/TitleBar/TitleBar";
import Badge from "../components/Badge/Badge";

import broom from "../assets/badges/broom.png"
import handshake from "../assets/badges/handshake.png"
import letter from "../assets/badges/opener.png"
import mortar from "../assets/badges/remedy.png"


function Dashboard() {

    const user = userData.users[0]

    return (
        <>
            <TitleBar title="DASHBOARD" titleImg=""/>
            <div className="dashboard-container">
                <section>
                    <h2>Current Tasks</h2>
                    <div>
                        {user.currentTasks.map((item) => {
                            return (<p>{item.subtask} | {item.slice}</p>)
                        })}
                    </div>
                </section>
                <div className="dashboard-middle">
                    <section className="badges">
                        <h2 className="badges__title">Badges</h2>
                        <div className="badges__content-box">
                            <Badge image={broom} progress={user.badgeProgress.tidyPrince * 100}>Tidy Prince</Badge>
                            <Badge image={handshake} progress={user.badgeProgress.socialHero * 100}>Social Hero</Badge>
                            <Badge image={letter} progress={user.badgeProgress.paperSlayer * 100}>Paper Slayer</Badge>
                            <Badge image={mortar} progress={user.badgeProgress.happySoul * 100}>Happy Soul</Badge>
                        </div>
                    </section>
                    <section>
                        <h2>Leaderboard</h2>
                    </section>
                </div>
                <section className="">
                    <h2>Accomplished</h2>
                    <div>
                        {user.completedTasks.map((item) => {
                            return (<p>{item.subtask} | {item.slice}</p>)
                        })}
                    </div>
                </section>
            </div>
        </>
    );
}

export default Dashboard;