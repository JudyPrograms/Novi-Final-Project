import React from 'react';
import arch from "../assets/before-icons/arch.png";
import mountain from "../assets/mountain.png";
import target from "../assets/before-icons/target.png";
import {gameInfo} from "../context/data";
import CardSection from "../components/CardSection/CardSection";
import Card from "../components/Card/Card";


function Play() {


    return (
        <div className="play-container">

            <Card
                title="Pick a Challenge"
                titleImg={target}
                cardImg={mountain}>

                <CardSection>
                    <ul>
                        {gameInfo.tasks.map((item) => {
                            return (
                                <li key={item.taskName}>
                                    <img src={arch} alt="arch" className="card-section__link-img"/>
                                    <h2><a href="">{item.taskName}</a></h2>
                                </li>)
                        })}
                    </ul>
                </CardSection>

            </Card>

            <div className="button-box">
                <button type="button" onClick={""}>
                    BACK
                </button>
                <button type="button" onClick={""}>
                    NEXT
                </button>
            </div>

        </div>
    );
}

export default Play;