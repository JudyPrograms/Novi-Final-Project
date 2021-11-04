import React from 'react';
import styles from './CardSection.module.css';


function CardSection({children}) {
    return (
            <div className={styles["card-section"]}>
                {children}
            </div>
    );
}

export default CardSection;