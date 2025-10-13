import React from "react";
import { Row, Col } from "react-bootstrap";
import ToggleContainer from "../toggles/toggleContainer";
import { inputsStyles, labelStyles, mobileInputStyles, mobileLabelStyles } from "../../styles/inputAndResultsStyles";
import CalculatorPadding from "../styles/calculatorPadding";

export default function Input({name, handleInputChange, value, handleUnitToggle, isDesktop}){

return(
    
    <div>
        <Row style={{marginBottom: "4px"}}>
            <label style={isDesktop ? labelStyles : mobileLabelStyles} htmlFor={name.variable}>{name.readibleName}</label>
        </Row>
        <Row style={{marginTop: "4px"}}>
        <div style={{display: "flex", width:"100%", justifyContent: "center"}}> 
            <input style={isDesktop ? inputsStyles : mobileInputStyles} type="number" pattern="/d*" inputMode="decimal" id={name.variable} onChange={handleInputChange} value={value[value.unit]}></input>
            <CalculatorPadding/>
            <ToggleContainer unit={value.unit} handleUnitToggle={handleUnitToggle} type={"inputs"} label={name.variable}/>
        </div>
        </Row>
    </div>
)
}