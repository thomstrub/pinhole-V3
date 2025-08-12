import React from "react";
import { Row, Col } from "react-bootstrap";
import ToggleContainer from "../../toggles/toggleContainer";
import { resultsStyles, labelStyles, rowStyles } from "../../../styles/inputAndResultsStyles";
import CalculatorPadding from "../../styles/calculatorPadding";

export default function Result({name, result, handleUnitToggle}){
    const resultInUnit = result[result.unit]
    console.log(result, "<---- result")
    console.log(resultInUnit, "<------ result in unit")
    return(
        <>
        <Row style={rowStyles}>
            <Col>
        <Row>
            <label style={labelStyles} htmlFor={name.variable}>{name.readibleName}</label>
        </Row>
        <Row style={{marginTop: "4px"}}>
            <div style={{display: "flex", width:"100%", margin: "0 auto"}}>
                <input style={resultsStyles} id={name.variable} value={resultInUnit ? resultInUnit : ''} readOnly={true}></input>
                <CalculatorPadding/>
                <ToggleContainer unit={result.unit} handleUnitToggle={handleUnitToggle} type={"results"} label={name.variable}/>
            </div> 
        </Row>
            </Col>
        </Row>
        </>
        
    )
}