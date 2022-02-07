import React, {useState} from 'react';
import styles from "./Menu.module.css"


function Menu({menuTitle, menuImg, topic, setActive, array, drop, scroll, input, type, placeholder, value}) {

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
                <div className={`${styles["menu__content"]} ${styles["menu__content" + (dropdown ? "--active" : "")]}`}>
                    {array && dropdown && array.map((item) => {
                        return (
                            <button
                                key={item.split(" ")[0] + item.length}
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
                                key={item.split(" ")[0] + item.length}
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
                <div className={styles["menu__field-hide-box"]}>
                    {type === "file" &&
                    <input className={`${styles["menu__field"]} ${styles["menu__field--fake"]}`}
                           placeholder={placeholder}
                           value={value}/>
                    }
                    <input type={type}
                           id={type}
                           name={type}
                           placeholder={placeholder}
                           onChange={handleInput}
                           className={styles["menu__field"]}
                    />
                </div>
                }


            </div>
            <img src={menuImg} alt="" className={styles["menu-topic__img"]}/>
        </div>
    );
}

export default Menu;