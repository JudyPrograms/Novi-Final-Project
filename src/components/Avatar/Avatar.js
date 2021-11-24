import React from 'react';
import createAlt from "../../helpers/createAlt";
import styles from './Avatar.module.css';

function Avatar({img, name, subname, avatar, setAvatar, object}) {


    return (
        <div className={styles["avatar__box"]}>
            <img src={img}
                 alt={createAlt(img)}
                 onClick={() => setAvatar(object)}
                 className={styles["avatar__img" + (avatar === object ? "--active": "")]}/>
            <h4 className={styles["avatar__name" + (avatar === object ? "--active": "")]}>{name}</h4>
            <h5 className={styles["avatar__sub-name"]}>{subname}</h5>
        </div>
    );
}

export default Avatar;