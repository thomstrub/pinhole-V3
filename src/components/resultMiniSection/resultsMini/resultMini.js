import React from "react";
import { Row, Col } from "react-bootstrap";
import { resultsMiniStyles, simpleCalculatorStyles, mobileSimpleCalculatorStyles, labelStyles, rowStyles, mobileLabelStyles } from "../../../styles/inputAndResultsStyles";

export default function ResultsMini({name, result, isSimpleCalculator, isDesktop}){

    function resultsMiniStyles(isDesktop, isSimpleCalculator) {
        if(!isSimpleCalculator){
            return resultsMiniStyles
        } else {
            return isDesktop ? simpleCalculatorStyles : mobileSimpleCalculatorStyles
        }
    }

    return(
        <>
            <Row>
                <label style={isDesktop ? labelStyles : mobileLabelStyles} htmlFor={name.variable}>{name.readibleName}</label>
            </Row>
            <Row style={{marginTop: "4px"}}>
                <Col>
                    <input style={resultsMiniStyles(isDesktop, isSimpleCalculator)} id={name.variableName} value={result ? result : ''} readOnly={true}></input>
                </Col>
            </Row>
        </>
    )
}