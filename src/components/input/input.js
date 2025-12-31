import React from "react";
import { Row, Col } from "react-bootstrap";
import ToggleContainer from "../toggles/toggleContainer";
import { inputsStyles, labelStyles, mobileInputStyles, mobileLabelStyles } from "../../styles/inputAndResultsStyles";
import * as styles from './input.module.css';
import CalculatorPadding from "../styles/calculatorPadding";

export default function Input({name, handleInputChange, value, handleUnitToggle, isDesktop}){

return(
    
    <div>
        <Row className={styles.inputRow}>
            <label className={isDesktop ? "" : ""} style={isDesktop ? labelStyles : mobileLabelStyles} htmlFor={name.variable}>{name.readibleName}</label>
        </Row>
        <Row className={styles.inputRowTop}>
        <div className={styles.inputFlex}> 
            <input style={isDesktop ? inputsStyles : mobileInputStyles} type="number" pattern="/d*" inputMode="decimal" id={name.variable} onChange={handleInputChange} value={value[value.unit]}></input>
            <CalculatorPadding/>
            <ToggleContainer unit={value.unit} handleUnitToggle={handleUnitToggle} type={"inputs"} label={name.variable}/>
        </div>
        </Row>
    </div>
)
}