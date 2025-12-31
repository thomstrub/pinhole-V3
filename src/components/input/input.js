import React from "react";
import { Row } from "react-bootstrap";
import ToggleContainer from "../toggles/toggleContainer";
import * as styles from './input.module.css';
import CalculatorPadding from "../styles/calculatorPadding";

export default function Input({name, handleInputChange, value, handleUnitToggle, isDesktop}){

return(
    <div className={styles.inputContainer}>
        <Row className={styles.inputRow}>
            <label className={styles.label} htmlFor={name.variable}>{name.readibleName}</label>
        </Row>
        <Row className={styles.inputRowTop}>
        <div className={styles.inputFlex}> 
            <input className={styles.input} type="number" pattern="/d*" inputMode="decimal" id={name.variable} onChange={handleInputChange} value={value[value.unit]}></input>
            {isDesktop && <CalculatorPadding/>}
            <ToggleContainer unit={value.unit} handleUnitToggle={handleUnitToggle} type={"inputs"} label={name.variable}/>
        </div>
        </Row>
    </div>
)
}