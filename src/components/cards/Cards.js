import data from "../../helpers/data";

import React from "react";
import styles from "./cards.module.scss";
function Cards() {
    return (
        <div className={styles.cards}>
            {data.map((item) => (
                <div className={styles.card}>
                    <h2>{item.title}</h2>
                    <img src={item.image} alt="City" />
                    <p>{item.desc}</p>
                </div>
            ))}
        </div>
    );
}

export default Cards;
