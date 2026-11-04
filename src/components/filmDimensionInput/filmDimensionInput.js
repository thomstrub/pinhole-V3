import React from "react";
import ToggleContainer from "../toggles/toggleContainer";
import constants from "../../constants/constants";
import { labelStyles, inputStyles, rowStyles, fieldStyles } from "../../styles/inputAndResultsStyles";

export default function FilmDimensionInput({handleInputChange, width, height, handleUnitToggle}){
    const { filmWidth, filmHeight } = constants.inputs;
    const [toggleLabel] = Object.keys(constants.linkedInputs);

    return(
        <div style={rowStyles}>
            <div style={{display: "flex", alignItems: "flex-end", gap: "8px", flex: "1 1 0", minWidth: 0}}>
                <div style={fieldStyles}>
                    <label style={{...labelStyles, whiteSpace: "nowrap"}} htmlFor={filmWidth.variable}>{filmWidth.readibleName}</label>
                    <input style={inputStyles} type="number" inputMode="decimal" id={filmWidth.variable} aria-label="Film width" onChange={handleInputChange} value={width[width.unit]}/>
                </div>
                <div aria-hidden="true" style={{height: "60px", lineHeight: "60px", fontSize: "28px", fontWeight: "300", color: "#384656"}}>×</div>
                <div style={fieldStyles}>
                    <div style={labelStyles}/>
                    <input style={inputStyles} type="number" inputMode="decimal" id={filmHeight.variable} aria-label="Film height" onChange={handleInputChange} value={height[height.unit]}/>
                </div>
            </div>
            <ToggleContainer unit={width.unit} handleUnitToggle={handleUnitToggle} type="inputs" label={toggleLabel}/>
        </div>
    )
}
