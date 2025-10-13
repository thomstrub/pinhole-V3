import React from "react";
import ResultsMiniSection from "../resultMiniSection/resultsMiniSection";
import ResultsSection from "../resultsSection/resultsSection";
import Input from "../input/input";
import constants from "../../constants/constants";
import ResultsMini from "../resultMiniSection/resultsMini/resultMini";


export default function SimpleCalculator({handleInputChange, inputs, results, handleUnitToggle, isDesktop}){
	const fStop = results[constants.results.fstop.variable]

return(
	<>
        <Input name={constants.inputs.focalLength} handleInputChange={handleInputChange} value={inputs.focalLength} handleUnitToggle={handleUnitToggle} isDesktop={isDesktop}/>
        <Input name={constants.inputs.diameter} handleInputChange={handleInputChange} value={inputs.diameter} handleUnitToggle={handleUnitToggle} isDesktop={isDesktop}/>
		<ResultsMini name={constants.results.fstop} result={fStop ? fStop : ''} isSimpleCalculator={true} isDesktop={isDesktop}/>
	</>   
)
}