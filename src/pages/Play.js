import React from 'react';
import avatar from "../assets/blanco-avatar.png";
import logo from "../assets/app-logo.png";


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

            <div className="play-card">
                <div className="title-bar">
                    <img src="" alt="" className="title-bar__icon"/>
                    <h1 className="title-bar__title">Pick a Challenge</h1>
                </div>
            </div>

        </div>
    );
}

export default Play;