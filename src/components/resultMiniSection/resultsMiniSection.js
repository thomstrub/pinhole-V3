import React from "react";
import Row from 'react-bootstrap/Row';
import constants from "../../constants/constants";
import ResultsMini from "./resultsMini/resultMini";
import CalculatorPadding from "../styles/calculatorPadding";
import * as styles from './resultsMiniSection.module.css';

export default function ResultsMiniSection({fStop, angleOfView}){
    const resultStyles = {

    }

    return(
        <Row>
            <div className={styles.flexRow}>
                <div>
                    <ResultsMini name={constants.results.fstop} result={fStop ? fStop : ''}/>
                </div>
                <CalculatorPadding/>
                <div>
                    <ResultsMini name={constants.results.angleOfView} result={angleOfView ? angleOfView : ''}/>
                </div>
            </div>
        </Row>
    )
}