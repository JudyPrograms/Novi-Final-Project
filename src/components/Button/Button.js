import React from 'react';
import styles from "./Button.module.css";

function Button({nav, form, tiny, key, handleButtonClick, children}) {
    return (
        <>
            {nav &&
            <button
                type="button"
                onClick={handleButtonClick}
                className={`${styles["btn"]} ${styles["btn--nav"]}`}>
                {children}
            </button>
            }
            {form &&
            <button
                type="submit"
                onClick={handleButtonClick}
                className={`${styles["btn"]} ${styles["btn--form"]}`}>
                {children}
            </button>
            }
            {tiny &&
            <button
                key={key}
                type="button"
                onClick={handleButtonClick}
                className={`${styles["btn"]} ${styles["btn--tiny"]}`}>
                {children}
            </button>
            }

        </>
    );
}

export default Button;