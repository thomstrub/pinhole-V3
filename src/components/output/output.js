import React from "react";
import ToggleContainer from "../toggles/toggleContainer";
import { labelStyles, resultStyles, rowStyles, fieldStyles } from "../../styles/inputAndResultsStyles";

// result is a string, or an object with a value per unit when handleUnitToggle is given
export default function Output({name, result, handleUnitToggle}){
    const hasUnit = Boolean(handleUnitToggle);
    const display = hasUnit ? result[result.unit] : result;

    return(
        <div style={rowStyles}>
            <div style={fieldStyles}>
                <label style={labelStyles} htmlFor={name.variable}>
                    {name.readibleName}
                </label>
                <input style={resultStyles} id={name.variable} value={display || ''} readOnly={true}/>
            </div>
            {hasUnit && <ToggleContainer unit={result.unit} handleUnitToggle={handleUnitToggle} type="results" label={name.variable}/>}
        </div>
    )
}
