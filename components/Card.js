import React from "react";
import styles from "../styles/Card.module.css";

const Card = ({ title, text, clickEvent }) => {
    return (
        <>
            <div className={styles.card} onClick={clickEvent}>
                <h1>{title}</h1>
            </div>
        </>
    )
}


export default Card;