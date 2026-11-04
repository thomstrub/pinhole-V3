import constants from "../constants/constants"

const millimeters = constants.units.millimeters.variable;
const inches = constants.units.inches.variable;

function toNumber(value){
    const number = Number(value);
    return Number.isFinite(number) && number > 0 ? number : 0;
}

function formatFStop(fStop){
    return "F-" + Number(fStop.toFixed(1));
}

function inBothUnits(valueInMm, unit, decimals = 2){
    return {
        [millimeters]: valueInMm ? valueInMm.toFixed(decimals) : '',
        [inches]: valueInMm ? (valueInMm * constants.units.inches.multiplierFromMillimeters).toFixed(decimals) : '',
        unit
    }
}

export default function calculateResults(state){
    const { inputs } = state;
    const focalLength = toNumber(inputs.focalLength[millimeters]);
    const diameter = toNumber(inputs.diameter[millimeters]);
    const filmWidth = toNumber(inputs.filmWidth[millimeters]);
    const filmHeight = toNumber(inputs.filmHeight[millimeters]);

    const fStop = focalLength && diameter ? focalLength / diameter : 0;

    // focal length scaled by the ratio of the full-frame diagonal to the film diagonal
    const filmDiagonal = Math.hypot(filmWidth, filmHeight);
    const lensEquivalent35mm = focalLength && filmWidth && filmHeight
        ? focalLength * constants.fullFrameDiagonalMm / filmDiagonal
        : 0;

    // angle subtended by the film diagonal at the pinhole
    const angleOfView = focalLength && filmWidth && filmHeight
        ? 2 * Math.atan(filmDiagonal / (2 * focalLength)) * 180 / Math.PI
        : 0;

    // constant is for inches
    const focalLengthInches = focalLength * constants.units.inches.multiplierFromMillimeters;
    const optimalPinholeDiameter = Math.sqrt(focalLengthInches * .00007) * constants.units.millimeters.multiplierFromInches;

    // to do: confirm formula
    const imageDiameter = focalLength * 1.92;

    return {
        [constants.results.fstop.variable]: fStop ? formatFStop(fStop) : '',
        [constants.results.lensEquivalent35mm.variable]: lensEquivalent35mm ? lensEquivalent35mm.toFixed(0) + "mm" : '',
        [constants.results.angleOfView.variable]: angleOfView ? Number(angleOfView.toFixed(2)) + "°" : '',
        [constants.results.optimalPinholeDiameter.variable]: inBothUnits(optimalPinholeDiameter, state.results.optimalPinholeDiameter.unit, 3),
        [constants.results.imageDiameter.variable]: inBothUnits(imageDiameter, state.results.imageDiameter.unit)
    }
}
