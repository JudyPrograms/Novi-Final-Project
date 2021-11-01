import React from 'react';
import arch from "../assets/arch.png";
import mountain from "../assets/mountain.png";
import CardContent from "../components/CardContent/CardContent";


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
        "slices": ["call a friend", "slice2", "slice3"]
    },
    {
        "task": "Selfcare",
        "slices": ["shop groceries", "slice2", "slice3"]
    },
]


function Play() {
    return (
        <div className="page-container">
            <div className="play-container">

                <CardContent>
                <ul>
                    {subtasks.map((item) => {
                        return (
                            <li>
                                <img src={arch} alt="arch" className="card-section__link-img"/>
                                <h2><a href="">{item.task}</a></h2>
                            </li>)
                    })}
                </ul>
                </CardContent>

                <div className="button-box">
                    <button type="button" onClick={""}>
                        BACK
                    </button>
                    <button type="button" onClick={""}>
                        NEXT
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Play;