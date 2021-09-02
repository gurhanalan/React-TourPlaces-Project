import React from "react";
import styles from "./header.module.scss";

function Header() {
    return (
        <div className={styles.header}>
            <h1>POPULAR TOUR PLACES</h1>
            <p>Click picture to get more information.</p>
        </div>
    );
}

export default Header;
