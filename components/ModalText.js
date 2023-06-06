import React from "react";
import styles from "../styles/ModalText.module.css";

const ModalText = ({ title, text }) => {
    return (
        <>
            <div className={styles.box}>
                <h1>{title}</h1>
                <hr style={{width: "100%"}} />
                <p>{text}</p>
            </div>
        </>
    )
}

export default ModalText;