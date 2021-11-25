import React from 'react';
import calcDaysAgo from "../../helpers/calcDaysAgo";
import styles from "./Table.module.css"

function Table({className, data, col1, col2, col3, col4, buttonColumn, handleClick, dateColumn, alert, imgColumn, titles}) {



    return (
        <div className={className ? `${styles["table"]} ${className}` : styles["table"]}>

            {col1 &&
            <>
                <div className={styles["table__col1"]}>
                    <h4>{titles[0]}</h4>
                    {data.map((item) => {
                        return (<span key={item[col2]}>{item[col1]}</span>);
                    })}
                </div>
            </>
            }

            {col2 &&
            <>
                <div className={styles["table__col2"]}>
                    <h4>{titles[1]}</h4>
                    {data.map((item) => {
                        return (<span key={item[col2]}>{item[col2]}</span>);
                    })}
                </div>
            </>
            }

            {col3 &&
            <>
                <div className={styles["table__col3"]}>
                    <h4>{titles[2]}</h4>
                    {data.map((item) => {
                        return (<span key={item[col2]}>{item[col3]}</span>);
                    })}
                </div>
            </>
            }

            {col4 &&
            <>
                <div className={styles["table__col4"]}>
                    <h4>{titles[3]}</h4>
                    {data.map((item) => {
                        return (<span key={item[col2]}>{item[col4]}</span>);
                    })}
                </div>
            </>
            }

            {dateColumn &&
            <>
                <div className={styles["table__col3"]}>
                    <h4>{titles[2]}</h4>
                    {data.map((item) => {
                        const daysAgo = calcDaysAgo(item[dateColumn])
                        return (<span key={item[col2]}>{alert - daysAgo} days</span>);
                    })}
                </div>
            </>
            }

            {buttonColumn &&
            <>
                <div className={styles["table__col4"]}>
                    <h4>{titles[3]}</h4>
                    {data.map((item) => {
                        return (<button
                            key={item[col2]}
                            type="button"
                            onClick={()=>handleClick(item[col2])}
                            className="nav-button nav-button--tiny">
                            DONE
                        </button>);
                    })}
                </div>
            </>
            }

            {imgColumn &&
            <>
                <div className={styles["table__col4"]}>
                    <h4>{titles[3]}</h4>
                    {data.map((item) => {
                        return (
                            <img key={item[col2]} className={styles["table-img"]} src={item[imgColumn]}
                                 alt=""/>
                        )
                    })}
                </div>
            </>
            }

        </div>
    );
}

export default Table;