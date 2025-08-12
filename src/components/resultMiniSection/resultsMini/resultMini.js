import React from "react";
import { Row, Col } from "react-bootstrap";
import { resultsMiniStyles, simpleCalculatorStyles, labelStyles, rowStyles } from "../../../styles/inputAndResultsStyles";

export default function ResultsMini({name, result, isSimpleCalculator}){

    return(
        <>
            <Row>
                <label style={{...labelStyles, marginLeft: "5px"}} htmlFor={name.variable}>{name.readibleName}</label>
            </Row>
            <Row style={{marginTop: "4px"}}>
                <Col>
                    <input style={isSimpleCalculator ? simpleCalculatorStyles : resultsMiniStyles} id={name.variableName} value={result ? result : ''} readOnly={true}></input>
                </Col>
            </Row>
        </>
    )
}