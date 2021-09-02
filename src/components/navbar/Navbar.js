import React from "react";

import styles from "./navbar.module.scss";

function Navbar() {
    return (
        <div className={styles.navbar}>
            <a href="#aboutus">ABOUT US</a>
            <a href="#foryou">FOR YOU</a>
            <a href="#services">SERVICES</a>
            <a href="#blog">BLOG</a>
            <a href="#vlog">VLOG</a>
            <a href="#contact">CONTACT</a>
        </div>
    );
}

export default Navbar;
