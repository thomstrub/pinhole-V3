import React from "react";
import { Row, Col } from "react-bootstrap";
import ToggleContainer from "../../toggles/toggleContainer";
import { resultsStyles, labelStyles, rowStyles } from "../../../styles/inputAndResultsStyles";
import * as styles from './result.module.css';
import CalculatorPadding from "../../styles/calculatorPadding";

export default function Result({name, result, handleUnitToggle}){
    const resultInUnit = result[result.unit]
    console.log(result, "<---- result")
    console.log(resultInUnit, "<------ result in unit")
    return(
        <>
        <Row>
            <Col>
        <Row>
            <label style={labelStyles} htmlFor={name.variable}>{name.readibleName}</label>
        </Row>
        <Row className={styles.rowTop}>
            <div className={styles.flex}>
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