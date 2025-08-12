import React from "react";
import Input from "../input/input";
import constants from "../../constants/constants";

export default function InputSection({handleInputChange, inputs, handleUnitToggle}){
return(
    <>
        <Input name={constants.inputs.focalLength} handleInputChange={handleInputChange} value={inputs.focalLength} handleUnitToggle={handleUnitToggle}/>
        <Input name={constants.inputs.diameter} handleInputChange={handleInputChange} value={inputs.diameter} handleUnitToggle={handleUnitToggle}/>
        <Input name={constants.inputs.filmDimension} handleInputChange={handleInputChange} value={inputs.filmDimension} handleUnitToggle={handleUnitToggle}/>
    </>
    
)
}