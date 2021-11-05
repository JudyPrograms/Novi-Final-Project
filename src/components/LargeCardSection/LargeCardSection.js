import React from 'react';
import styles from './SmallCardSection.module.css';


function LargeCardSection({children}) {
    return (
        <div className={styles["card-section"]}>
            {children}
        </div>
    );
}

export default LargeCardSection;