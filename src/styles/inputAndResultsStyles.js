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
    paddingLeft:"16px",
    color: "#384656"
}

const inputsStyles = {
    ...basicBoxStyles,
    height: "60px",
    width: "240px",
}

const mobileInputStyles = {
    ...basicBoxStyles,
    height: "60px",
    width: "58%",
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
    width: "390px",
    border: "1px solid #DBE1E5",
    display: "block", 
    margin: "0 auto",
    justifyContent: "center" 

}

const mobileSimpleCalculatorStyles = {
    ... simpleCalculatorStyles,
    width: "99%",
}

const labelStyles = {
    color: "#555B6F",
    lineHeight: "20px",
}

const mobileLabelStyles = {
    ...labelStyles,
    marginLeft: "2px",
} 

const rowStyles = {}

export {inputsStyles, mobileInputStyles, resultsStyles, resultsMiniStyles, simpleCalculatorStyles, mobileSimpleCalculatorStyles, labelStyles, mobileLabelStyles, rowStyles}