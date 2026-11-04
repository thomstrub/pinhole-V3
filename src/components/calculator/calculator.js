import React from "react";
import Input from "../input/input";
import FilmDimensionInput from "../filmDimensionInput/filmDimensionInput";
import Output from "../output/output";
import constants from "../../constants/constants";

export default function Calculator({isAdvanced, inputs, results, handleInputChange, handleUnitToggle}){
    return(
        <div>
            <Input name={constants.inputs.focalLength} handleInputChange={handleInputChange} value={inputs.focalLength} handleUnitToggle={handleUnitToggle}/>
            <Input name={constants.inputs.diameter} handleInputChange={handleInputChange} value={inputs.diameter} handleUnitToggle={handleUnitToggle}/>
            <Output name={constants.results.fstop} result={results[constants.results.fstop.variable]}/>
            {isAdvanced && (
                <>
                    <Output name={constants.results.idealPinholeDiameter} result={results[constants.results.idealPinholeDiameter.variable]} handleUnitToggle={handleUnitToggle}/>
                    <FilmDimensionInput handleInputChange={handleInputChange} width={inputs.filmWidth} height={inputs.filmHeight} handleUnitToggle={handleUnitToggle}/>
                    <Output name={constants.results.lensEquivalent35mm} result={results[constants.results.lensEquivalent35mm.variable]}/>
                    <Output name={constants.results.angleOfView} result={results[constants.results.angleOfView.variable]}/>
                    <Output name={constants.results.imageDiameter} result={results[constants.results.imageDiameter.variable]} handleUnitToggle={handleUnitToggle}/>
                </>
            )}
        </div>
    )
}
