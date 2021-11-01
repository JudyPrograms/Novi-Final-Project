import React from 'react';
import {useHistory, Link} from 'react-router-dom';
import avatar from "../assets/blanco-avatar.png";
import logo from "../assets/app-logo.png";
import target from "../assets/target.png";
import mountain from "../assets/mountain.png";
import arch from "../assets/arch.png";


const subtasks = [
    {
        "task": "Paperwork",
        "slices": ["pay bills", "slice2", "slice3"]
    },
    {
        "task": "Declutter",
        "slices": ["wash clothes", "clean dishes", "tidy closet", "tidy room"]
    },
    {
        "task": "Socialize",
        "slices": ["pay bills", "slice2", "slice3"]
    },
    {
        "task": "Selfcare",
        "slices": ["pay bills", "slice2", "slice3"]
    },
]


function Play() {
    return (
        <div className="page-container">

            <header className="header">
                <div className="header__player">
                    <img src={avatar} alt="avatar" className="header__avatar"/>
                    <div className="header__progress-bar">
                        <div className="header__progress">
                            65%
                        </div>
                    </div>
                </div>
                <img src={logo} alt="logo" className="header__app-logo"/>
            </header>

            <nav className="navbar">
                <Link to="/play" className="navbar__link">PLAY</Link>
                <Link to="/dashboard" className="navbar__link">DASHBOARD</Link>
                <Link to="/settings" className="navbar__link">SETTINGS</Link>
                <Link to="/account" className="navbar__link">ACCOUNT</Link>
            </nav>

            <div className="play-container">

                <div className="play-card">
                    <div className="title-bar">
                        <img src={target} alt="target" className="title-bar__title-icon"/>
                        <h1 className="title-bar__title">Pick a Challenge</h1>
                    </div>
                    <div className="card-content">
                        <ul>
                            {subtasks.map((item) => {
                                return (
                                <li>
                                    <img src={arch} alt="arch" className="card-content__link-img"/>
                                    <h2><a href="">{item.task}</a></h2>
                                </li>)
                            })}
                        </ul>
                    </div>
                    <img src={mountain} alt="mountain" className="card-image"/>
                </div>

                <div className="button-box">
                    <button type="button">
                        BACK
                    </button>
                    <button type="button">
                        NEXT
                    </button>
                </div>

            </div>


        </div>
    );
}

export default Play;