import React, {useState, useEffect} from "react";
import { Container, Col, Row } from 'react-bootstrap';

import PSPSlogo from "../assets/PSPSlogo.svg";
import Calculator from "./calculator";

// import "../components/styles/styles.css";

const pageStyles = {
  color: "#2D3242",
  fontFamily: "Karla",
  flex: "1"
}



const IndexPage = () => {
  const [isDesktop, setIsDesktop] = useState(false);

useEffect (() => {
  let mediaQuery;
  const isBrowser = typeof window !== "undefined";
  if(isBrowser && window.matchMedia('(min-width: 768px)')){
    mediaQuery = window.matchMedia('(min-width: 768px)')
    // Register event listener
    mediaQuery.addEventListener("change", handleTabletChange)
    // Initial check
    handleTabletChange(mediaQuery)
  } 
  return () => mediaQuery.removeEventListener("change", handleTabletChange)
})

// utils.js


function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    console.log('Media Query Matched!')
    setIsDesktop(true);
  } else {
    console.log('Not Matched');
    setIsDesktop(false);

  }
}
  return (
    <main style={pageStyles}>
      {isDesktop ? 
      <Container>
        <Row style={{border:"1px solid magenta"}}>
            <Col style={{border:"1px solid magenta"}}>
            <div></div>
            </Col>
              <Col style={{justifyContent: "center", width: "400px"}}>
                <Calculator/>
              </Col>
            <Col style={{border:"1px solid magenta"}}>
            <div></div>
            </Col>
      </Row>
      </Container>
    
      : 
      <Calculator/>
    }
    </main>
    
  )
}

export default IndexPage

export const Head = () => <title>Pinhole Calculator</title>
