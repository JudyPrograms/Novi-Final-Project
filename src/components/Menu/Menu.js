import React, {useState} from 'react';
import styles from "./Menu.module.css"


function Menu({menuTitle, menuImg, topic, setActive, array, drop, scroll, input, placeholder}) {

    const [dropdown, toggleDropdown] = useState(false);

    function handleFieldClick(item) {
        setActive(item);
        toggleDropdown(!dropdown);
    }

    function handleInput(event) {
        event.preventDefault();
        setActive(event.target.value);
        console.log(event.target.value);
    }

    return (
        <div className={styles["menu-box"]}>
            <h1 className={styles["menu-topic"]}>{topic}</h1>
            <div className={styles["menu"]}>

                {!input &&
                <button
                    onClick={() => toggleDropdown(!dropdown)}
                    className={styles["menu__title"]}>
                    {menuTitle}
                </button>
                }

                {drop &&
                <div
                    className={`${styles["menu__content"]} ${styles["menu__content" + (dropdown ? "--active" : "")]}`}>
                    {array && dropdown && array.map((item) => {
                        return (
                            <button
                                key={item.split(" ")[2]}
                                value={item}
                                onClick={() => handleFieldClick(item)}
                                className={styles["menu__field"]}>
                                {item}
                            </button>
                        );
                    })}
                </div>
                }

                {scroll &&
                <div className={styles[`menu__content--scroll`]}>
                    {array && array.map((item, index) => {
                        return (
                            <button
                                key={index}
                                value={item}
                                className={`${styles["menu__field"]} ${styles["menu__field--long"]}`}
                                style={{content: {"&:before": {content: index + 1}}}}>
                                {`>> ${index + 1}. ${item}`}
                            </button>
                        );
                    })}
                </div>
                }

                {input &&
                    <input type="text"
                           id="new-text"
                           name="new-text"
                           placeholder={placeholder}
                           onChange={handleInput}
                           className={styles["menu__field"]}/>
                }

            </div>
            <img src={menuImg} alt="" className={styles["menu-topic__img"]}/>
        </div>
    );
}

export default Menu;