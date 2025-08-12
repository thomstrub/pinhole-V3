import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import constants from "../../constants/constants";
import ResultsMini from "./resultsMini/resultMini";
import CalculatorPadding from "../styles/calculatorPadding";

export default function ResultsMiniSection({fStop, angleOfView}){
    const resultStyles = {

    }

    return(
       
        <Row>
            <div style={{display:"flex", flexDirection: "row"}}>
                <div>
                    <ResultsMini name={constants.results.fstop} result={fStop ? fStop : ''}/>
                </div>
                <CalculatorPadding/>
                <div >
                    <ResultsMini name={constants.results.angleOfView} result={angleOfView ? angleOfView : ''}/>
                </div>
            </div>
        </Row>
        
    )
}