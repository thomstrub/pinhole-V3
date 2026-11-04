import React from "react";

import Calculator from "./calculator";

const pageStyles = {
  color: "#2D3242",
  fontFamily: "Karla"
}

const IndexPage = () => (
  <div style={pageStyles}>
    <Calculator/>
  </div>
)

export default IndexPage

export const Head = () => <title>Pinhole Calculator</title>
