import React from 'react';
import styles from "../ProgressBar/ProgressBar.module.css";


function ProgressBar({progress}) {

    const progressStyle = {
        width: `${progress}%`
    }

    return (
        <div className={styles["progress-bar"]}>
            <div className={styles["progress"]} style={progressStyle}>
                <div className={styles["percentage"]}>{progress}%</div>
            </div>
        </div>
    );
}

export default ProgressBar;