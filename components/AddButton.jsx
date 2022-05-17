import React from 'react';
import styles from "../styles/Add.module.scss";

const AddButton = ({ setClose }) => {
    return (
        <div className={styles.mainAddButton} onClick={()=>setClose(false)}>
            Add New Pizza
        </div>
    );
}

export default AddButton;
