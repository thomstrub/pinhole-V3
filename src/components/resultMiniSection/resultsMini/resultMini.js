import React from "react";
import { Row, Col } from "react-bootstrap";
import * as styles from './resultsMini.module.css';

export default function ResultsMini({name, result, isSimpleCalculator}){

    const inputClassName = isSimpleCalculator 
        ? `${styles.resultInput} ${styles.simpleCalculator}` 
        : styles.resultInput;

    return(
        <div className={styles.resultContainer}>
            <Row>
                <label className={styles.label} htmlFor={name.variable}>{name.readibleName}</label>
            </Row>
            <Row className={styles.rowTop}>
                <Col>
                    <input className={inputClassName} id={name.variable} value={result ? result : ''} readOnly={true}></input>
                </Col>
            </Row>
        </div>
    )
}