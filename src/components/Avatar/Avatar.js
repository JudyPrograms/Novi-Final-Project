import React from 'react';
import createAlt from "../../helpers/createAlt";
import styles from './Avatar.module.css';

function Avatar({img, name, subname, avatar, setAvatar}) {


    return (
        <div className={styles["avatar__box"]}>
            <img src={img}
                 alt={createAlt(img)}
                 onClick={() => setAvatar(name)}
                 className={styles["avatar__img" + (avatar === name ? "--active": "")]}/>
            <h4 className={styles["avatar__name" + (avatar === name ? "--active": "")]}>{name}</h4>
            <h5 className={styles["avatar__sub-name"]}>{subname}</h5>
        </div>
    );
}

export default Avatar;