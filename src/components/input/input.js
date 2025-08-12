import React from "react";
import { Row, Col } from "react-bootstrap";
import ToggleContainer from "../toggles/toggleContainer";
import { inputsStyles, labelStyles, rowStyles } from "../../styles/inputAndResultsStyles";
import CalculatorPadding from "../styles/calculatorPadding";

export default function Input({name, handleInputChange, value, handleUnitToggle}){

return(
    
    <>
        <Row style={{marginBottom: "4px"}}>
            <label style={labelStyles} htmlFor={name.variable}>{name.readibleName}</label>
        </Row>
        <Row style={{marginTop: "4px"}}>
        <div style={{display: "flex", width:"100%", justifyContent: "center", border: "1px solid cyan"}}> 
            <input style={inputsStyles} type="number" pattern="/d*" inputMode="decimal" id={name.variable} onChange={handleInputChange} value={value[value.unit]}></input>
            <CalculatorPadding/>
            <ToggleContainer unit={value.unit} handleUnitToggle={handleUnitToggle} type={"inputs"} label={name.variable}/>
        </div>
        </Row>
    </>
)
}