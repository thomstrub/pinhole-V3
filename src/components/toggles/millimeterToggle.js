import React from "react";
import * as styles from './toggle.module.css';
export default function MillimeterToggle({colorStyles}){
    return(
        <div style={colorStyles} className={`${styles.toggle} ${styles.mm}`}>
            mm
        </div>
    )
}