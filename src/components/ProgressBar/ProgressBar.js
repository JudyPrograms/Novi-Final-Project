import React from 'react';
import styles from "../ProgressBar/ProgressBar.module.css";


function ProgressBar({progress, barColor}) {

    const progressStyle = {
        width: `${progress}%`
    }

    const barStyle = {
        backgroundColor: barColor
    }

    return (
        <div className={styles["progress-bar"]} style={barStyle}>
            <div className={styles["progress"]} style={progressStyle}>
                <div className={styles["percentage"]}>{progress}%</div>
            </div>
        </div>
    );
}

export default ProgressBar;