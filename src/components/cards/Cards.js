import data from "../../helpers/data";

import React, { useState } from "react";
import styles from "./cards.module.scss";

function Cards() {
    const [showDetails, setShowDetails] = useState(false);
    return (
        // <div className={styles.cards}>

        //     {data.map((item) => (
        //         <div className={styles.card}>
        //             <h2>{item.title}</h2>
        //             <img src={item.image} alt="City" />
        //             <p>{item.desc}</p>
        //         </div>
        //     ))}
        // </div>

        <div
            className={styles.cards}
            onClick={() => setShowDetails(!showDetails)}
        >
            {showDetails
                ? data.map((item) => (
                      <div className={styles.card}>
                          <h2>{item.title}</h2>
                          <img src={item.image} alt="City" />
                          <p>{item.desc}</p>
                      </div>
                  ))
                : data.map((item) => (
                      <div className={styles.card}>
                          <img src={item.image} alt="City" />
                      </div>
                  ))}
        </div>
    );
}

export default Cards;
