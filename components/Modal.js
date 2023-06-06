import React from "react";
import styles from "../styles/Modal.module.css"

const Modal = ({ children, close }) => (
    <>
        <div className={styles.overlay} onClick={close} />
        <div className={styles.modal}>  
            {children}
        </div>
    </>
)

export default Modal;