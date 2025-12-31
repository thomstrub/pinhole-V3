import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import * as styles from "./CalculatorLayout.module.css";
import PSPSlogo from "../../assets/PSPSlogo.svg";

export default function CalculatorLayout({ children }) {
  return (
    <div className={styles.root}>
      <main className={styles.main}>
        <Container className={styles.headerContainer}>
          <h1 className={styles.title}>Pinhole Calculator</h1>
        </Container>
        <div className={styles.contentWrapper}>
          {children}
        </div>
      </main>
      <footer className={styles.footer}>
        <Container fluid>
          <Row>
            <Col>
              <Row>
                <PSPSlogo className={styles.logo} />
              </Row>
              <Row>
                <div className={styles.footerText}>
                  Brought to you by&nbsp;
                  <a href="https://psps.club/">Puget Sound Pinholers Society</a>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}
