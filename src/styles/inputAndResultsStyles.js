const basicBoxStyles = {
    color: "#3E3D3D",
    fontFamily: "Karla",
    fontSize: "32px",
    lineHeight: "32px",
    fontWeight: "400px",
    border: "1px solid #cccccc",
    borderRadius: "6px",
    boxSizing: "border-box",
    marginBottom:"32px",
    // display: "flex",
    paddingLeft:"16px",
    // display: "block",
    // margin: "0 auto",

    color: "#384656"
}

const inputsStyles = {
    ...basicBoxStyles,
    height: "60px",
    width: "200px"    
}

const resultsStyles = {
    ...inputsStyles,
    background: "#ECECEC"
}

const resultsMiniStyles = {
    ...basicBoxStyles,
    background: "#ECECEC",
    height: "60px",
    width: "160px"     
}

const simpleCalculatorStyles = {
    ...basicBoxStyles,
    background: "#EAECEF",
    height: "60px",
    width: "355px",
    border: "1px solid #DBE1E5",
    display: "flex", 
    width:"100%", 
    justifyContent: "center" 

}

const labelStyles = {
    color: "#555B6F",
    lineHeight: "20px",
    marginLeft: "10px"
}

const rowStyles = {}

export {inputsStyles, resultsStyles, resultsMiniStyles, simpleCalculatorStyles, labelStyles, rowStyles}