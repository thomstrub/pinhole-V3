import React, { useState, useMemo } from 'react';

import constants from '../constants/constants';
import calculateResults from '../helper/calculate';
import Tabs from '../components/tabs/tabs';
import Calculator from '../components/calculator/calculator';

const { millimeters, inches } = constants.units;

const emptyInput = unit => ({ inches: '', millimeters: '', unit });

function convert(value, unit){
    if(value === '') return '';
    const converted = unit === inches.variable
        ? value * inches.multiplierFromMillimeters
        : value * millimeters.multiplierFromInches;
    return String(Number(converted.toFixed(2)));
}

export default function CalculatorPage() {
    const [state, setState] = useState({
        inputs: {
            focalLength: emptyInput(inches.variable),
            diameter: emptyInput(millimeters.variable),
            filmWidth: emptyInput(inches.variable),
            filmHeight: emptyInput(inches.variable)
        },
        results: {
            optimalPinholeDiameter: { unit: millimeters.variable },
            imageDiameter: { unit: inches.variable }
        },
        tab: constants.tabs.basic
    });

    const results = useMemo(() => calculateResults(state), [state.inputs, state.results]);

    function handleInputChange(e){
        const id = e.target.id;
        const value = e.target.value < 0 ? '' : e.target.value;
        const unit = state.inputs[id].unit;
        const otherUnit = unit === millimeters.variable ? inches.variable : millimeters.variable;

        setState({
            ...state,
            inputs: {
                ...state.inputs,
                [id]: {
                    [unit]: value,
                    [otherUnit]: convert(value, otherUnit),
                    unit
                }
            }
        })
    }

    function handleUnitToggle(type, label){
        const labels = constants.linkedInputs[label] || [label];
        const current = state[type][labels[0]];
        if(!current) return;
        const newUnit = current.unit === millimeters.variable ? inches.variable : millimeters.variable;

        setState({
            ...state,
            [type]: labels.reduce((updated, name) => ({
                ...updated,
                [name]: { ...state[type][name], unit: newUnit }
            }), state[type])
        })
    }

    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <header style={{ width: "100%", position: "sticky", top: 0, zIndex: 10, background: "#FFFFFF" }}>
                <h1 style={{ fontWeight: "700", fontSize: "28px", lineHeight: "33px", color: "#333", textAlign: "center", margin: "0", padding: "16px 20px 14px" }}>
                    Pinhole Calculator
                </h1>
                <Tabs active={state.tab} onChange={tab => setState({ ...state, tab })}/>
            </header>
            <main style={{ flex: 1, width: "100%", maxWidth: "430px", margin: "0 auto", padding: "20px 20px 0", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <Calculator
                    isAdvanced={state.tab === constants.tabs.advanced}
                    inputs={state.inputs}
                    results={results}
                    handleInputChange={handleInputChange}
                    handleUnitToggle={handleUnitToggle}
                />
                <footer style={{ textAlign: "center", fontSize: "16px", lineHeight: "20px", color: "#555B6F", padding: "0 0 40px", textWrap: "balance" }}>
                    Brought to you by <a href="https://psps.club/" style={{ color: "#248BFD", textDecoration: "none" }}>Puget Sound Pinholer’s Society</a>
                </footer>
            </main>
        </div>
    )
}
