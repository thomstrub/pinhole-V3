import React from "react";
import * as styles from './toggle.module.css';
export default function InchToggle({colorStyles}){
    return(
        <div style={colorStyles} className={`${styles.toggle} ${styles.inch}`}>
            in
        </div>
    )
}