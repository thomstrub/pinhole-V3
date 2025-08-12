import React from "react";
import ResultsMiniSection from "../resultMiniSection/resultsMiniSection";
import ResultsSection from "../resultsSection/resultsSection";
import InputSection from "../inputSection/inputSection";

export default function AdvancedCalculator({handleInputChange, inputs, results, handleUnitToggle}){
return(
    <>	
		<p>advancedCacluator</p>
		<InputSection handleInputChange={handleInputChange} inputs={inputs} handleUnitToggle={handleUnitToggle}/>
		<ResultsMiniSection fStop={results.fStop} angleOfView={results.angleOfView}/>
		<ResultsSection results={results} handleUnitToggle={handleUnitToggle}/>
    </>   
)
}