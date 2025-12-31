import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import * as styles from "./CalculatorLayout.module.css";
import PSPSlogo from "../../assets/PSPSlogo.svg";
console.log ("STYLES -------------------->", styles);

export default function CalculatorLayout({ children }) {
  return (
    <div className={styles.root}>
      <main className={styles.main}>{children}</main>
      <footer>
        <Container fluid>
          <Row>
            <Col>
              <Row>
                <PSPSlogo className={styles.logo} />
              </Row>
              <Row>
                <Container style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                  <div className={styles.footerText}>
                    Brought to you by&nbsp;
                    <a href="https://psps.club/">Puget Sound Pinholers Society</a>
                  </div>
                </Container>
              </Row>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}
