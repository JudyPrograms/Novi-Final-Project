import React from 'react';
import styles from "./Button.module.css";

function Button({nav, form, table, buttonKey, handleButtonClick, children}) {
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
            {table &&
            <button
                key={buttonKey}
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