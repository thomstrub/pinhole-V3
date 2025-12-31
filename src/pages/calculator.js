import CalculatorLayout from '../components/layout/CalculatorLayout';
import React, { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import constants from '../constants/constants';
import calculateResults from '../helper/calculate';

import PSPSlogo from "../assets/PSPSlogo.svg";
import AdvancedCalculator from '../components/advancedCalculator/advancedCacluator';
import SimpleCalculator from '../components/simpleCalculator/simpleCalculator';

export default function Calculator({isDesktop}) {
const millimeters = constants.units.millimeters.variable;
const inches = constants.units.inches.variable;
    // state setup 


    const [state, setState] = useState({
        inputs: {
            focalLength: {
                inches: '',
                millimeters: '',
                unit: constants.units.inches.variable
            },
            diameter: {
                inches: '',
                millimeters: '',
                unit: constants.units.millimeters.variable
            },
            filmDimension: {
                inches: '',
                millimeters: '',
                unit: constants.units.inches.variable
            },
        },
        results: {
            fStop: '',
            angleOfView: '',
            imageDiameter: {
                inches: '',
                millimeters: '',
                unit: constants.units.inches.variable
            },
            optimalPinholeDiameter: {
                inches: '',
                millimeters: '',
                unit: constants.units.millimeters.variable
            },
            optimalFocalLength: {
                inches: '',
                millimeters: '',
                unit: constants.units.inches.variable
            }
        },
        isSimpleCalculator: true     
    });

    // handlers

    function handleInputChange(e){
        e.preventDefault();
        const id = e.target.id;
        const value = e.target.value < 0 ? '' : e.target.value;
        const valueInInches = value * constants.units.inches.multiplierFromMillimeters;
        const valueInMillimeters = value * constants.units.millimeters.multiplierFromInches;

        if(state.inputs[id].unit === constants.units.millimeters.variable){
            setState({
                ...state,
                inputs: {
                    ...state.inputs,
                    [id]: {
                        [constants.units.millimeters.variable] : value,
                        [constants.units.inches.variable] : valueInInches % 1 > 0 ? (valueInInches).toFixed(2): valueInInches,
                        unit : state.inputs[id].unit
                    }
                }
            })
        } else if (state.inputs[id].unit === constants.units.inches.variable){
            setState({
                ...state,
                inputs: {
                    ...state.inputs,
                    [id]: {
                        [constants.units.millimeters.variable] : valueInMillimeters % 1 > 0 ? (valueInMillimeters).toFixed(2) : valueInMillimeters,
                        [constants.units.inches.variable] : value,
                        unit : state.inputs[id].unit 
                    }
                }
            })
        } else {
            throw new Error("Unit Error.")
        }
    }

    function handleSimpleAdvancedToggle(state){
        if(state.isSimpleCalculator){
            return(
                <SimpleCalculator handleInputChange={handleInputChange} 
                    inputs={state.inputs} 
                    results={state.results} 
                    handleUnitToggle={handleUnitToggle}
                    isDesktop={isDesktop}
                    />            
            )
        } else {
            return(
                <AdvancedCalculator handleInputChange={handleInputChange} 
                    inputs={state.inputs} 
                    results={state.results} 
                    handleUnitToggle={handleUnitToggle}
                    />
            )
        }
    }

    function handleUnitToggle(type, label){
        if(type && label){
            if(state[type][label]){
            const newUnit = state[type][label].unit === millimeters ? inches : millimeters;
                setState({
                    ...state,
                    [type]:{
                        ...state[type],
                        [label]: {
                            ...state[type][label],
                            unit:   newUnit
                        }
                    }
                })
            }
        }
           
    }

    useEffect(()=> {
        setState({
            ...state,
            results: calculateResults(state)
        })
    },[state.inputs.diameter.inches, state.inputs.diameter.millimeters, state.inputs.filmDimension.inches, state.inputs.filmDimension.millimeters, state.inputs.focalLength.inches, state.inputs.focalLength.millimeters])
    
    return (
      <CalculatorLayout>
        <Row>
          <Col>
            <Row>
              <Container>
                <h1>Pinhole Calculator</h1>
              </Container>
            </Row>
            <Row style={{ flexGrow: "1" }}>
              <div>
                {handleSimpleAdvancedToggle(state)}
              </div>
            </Row>
          </Col>
        </Row>
      </CalculatorLayout>
    );
}   