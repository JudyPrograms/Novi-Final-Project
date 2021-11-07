import React, {useState} from 'react';
import styles from "./Menu.module.css"


function Menu({menuTitle, menuImg, active, setActive, array, drop}) {

    const [dropdown, toggleDropdown] = useState(false);

    function handleFieldClick(item) {
        setActive(item);
        toggleDropdown(!dropdown);
    }

    return (
        <>
            <h1 className={styles["menu-topic"]}>{active}</h1>
            <div className={styles["menu"]}>
                <button
                    onClick={() => toggleDropdown(!dropdown)}
                    className={styles["menu__title"]}>
                    {menuTitle}
                </button>
                {drop ?
                    <div className={styles[`menu__content menu__content--${dropdown && "active"}`]}>
                        {array.length > 0 && dropdown && array.map((item) => {
                            return (
                                <button
                                    value={item}
                                    onClick={() => handleFieldClick(item)}
                                    className={styles["menu__field"]}>
                                    {item}
                                </button>
                            );
                        })}
                    </div>
                    :
                    <div className={styles[`menu__content--scroll`]}>
                        {array.length > 0 && array.map((item, index) => {
                            return (
                                <>
                                    <button
                                        value={item}
                                        /*#### ALLEEN WIDTH AANPASSEN WERKT NIET MET: styles[".menu__field
                                         menu__field--long"] DUS ALLE STYLING GEKOPIEERD IN ALLEEN DEZE*/
                                        className={styles["menu__field--long"]}
                                        style={{content:{"&:before":{content: index+1}}}}>
                                        {`>> ${index+1}. ${item}`}
                                    </button>
                                </>
                            );
                        })}
                    </div>
                }
            </div>
            <img src={menuImg} alt="" className={styles["menu-topic__img"]}/>
        </>
    );
}

export default Menu;