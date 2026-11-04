import React from "react";
import ToggleContainer from "../toggles/toggleContainer";
import { labelStyles, inputStyles, rowStyles, fieldStyles } from "../../styles/inputAndResultsStyles";

export default function Input({name, handleInputChange, value, handleUnitToggle}){
    return(
        <div style={rowStyles}>
            <div style={fieldStyles}>
                <label style={labelStyles} htmlFor={name.variable}>{name.readibleName}</label>
                <input style={inputStyles} type="number" inputMode="decimal" id={name.variable} onChange={handleInputChange} value={value[value.unit]}/>
            </div>
            <ToggleContainer unit={value.unit} handleUnitToggle={handleUnitToggle} type="inputs" label={name.variable}/>
        </div>
    )
}
