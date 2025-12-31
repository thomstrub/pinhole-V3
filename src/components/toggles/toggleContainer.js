import React from "react";
import InchToggle from "./inchToggle";
import MillimeterToggle from "./millimeterToggle";
import constants from "../../constants/constants";
import * as styles from './toggleContainer.module.css';
export default function ToggleContainer({unit, handleUnitToggle, type, label}){
    
    // Layout styles moved to CSS module
    const notSelectedColorStyles = {
        border: "1px solid #cccccc",
        background: "#F2F3F5",
        color: "#BCBCBC"
    }
    const selectedColorStyles = {
        background: "#248CFF",
        color: "white"
    }

    function assignColorStyles(unit, type){
        if(unit === type){
            return selectedColorStyles
        } else {
            return notSelectedColorStyles
        }
    }
    return(
        <div onClick={() => handleUnitToggle(type, label)} className={styles.toggleContainer}>
            <InchToggle colorStyles={assignColorStyles(unit, constants.units.inches.variable)}/>
            <MillimeterToggle colorStyles={assignColorStyles(unit, constants.units.millimeters.variable)}/>       
        </div>
    )
}