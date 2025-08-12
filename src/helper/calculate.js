import constants from "../constants/constants"

export default function calculateResults(state){

    const inputs = state.inputs;
    const millimeters = constants.units.millimeters.variable;
    const inches = constants.units.inches.variable;

    // calculate fstop
    function calculateFStopFromMm(diameter, focalLength){
        const fStop = Number(focalLength[millimeters])/ Number(diameter[millimeters])
        const formattedFStop = fStop % 1 ? fStop.toFixed(1) : fStop;
        return fStop ? "F-" + formattedFStop : ''
    }

    // calculate angle of view
    function calculateAngleOfViewFromMm(filmDimension, focalLength){
        const filmDimensionByFocalLength = Number(filmDimension[millimeters])/(2 * Number(focalLength[millimeters]))
        const angleOfViewInRadians = 2 * Math.atan(filmDimensionByFocalLength)
        const angleOfViewInDegrees = angleOfViewInRadians * 180 / Math.PI
        return angleOfViewInDegrees ? angleOfViewInDegrees.toFixed(0) + "°" : ''
    }

    //calculate image diameter in mm
    function calculateImageDiameterFromMm(focalLength){
        const imageDiameter = Number(focalLength[millimeters]) * 1.92
        return imageDiameter ? imageDiameter.toFixed(2) : ''
    }

// to do: grab formulas for these:

    //calculate optimal pinhole diameter in mm
    function calculateOptimalPinholeDiameterFromMm(focalLength){
        const optimalPinholeDiameterFromMm = Math.sqrt(Number(focalLength[millimeters]) * .00007)
        return optimalPinholeDiameterFromMm ? optimalPinholeDiameterFromMm.toFixed(2) : ''
    }

    //calculate optimal focal length in mm
    function calculateOptimalFocalLengthFromMm(diameter){
        const optimalFocalLengthFromMm = Math.pow((Number(diameter[millimeters])/ .03679), 2);
        return optimalFocalLengthFromMm ? optimalFocalLengthFromMm.toFixed(2) : ''
    }

    return {
        [constants.results.fstop.variable]: inputs.diameter.millimeters && inputs.focalLength.millimeters ? calculateFStopFromMm(inputs.diameter, inputs.focalLength) : '',
        [constants.results.angleOfView.variable]: inputs.filmDimension[millimeters] && inputs.focalLength[millimeters] ? calculateAngleOfViewFromMm(inputs.filmDimension, inputs.focalLength) : '',
        [constants.results.imageDiameter.variable]: {
            [millimeters]: calculateImageDiameterFromMm(inputs.focalLength) ? calculateImageDiameterFromMm(inputs.focalLength): '',
            [inches]: calculateImageDiameterFromMm(inputs.focalLength) ? (calculateImageDiameterFromMm(inputs.focalLength) * constants.units.inches.multiplierFromMillimeters).toFixed(2) : '',
            unit : state.results.imageDiameter.unit
        },
        [constants.results.optimalPinholeDiameter.variable]: {
            [millimeters]: calculateOptimalPinholeDiameterFromMm(inputs.focalLength) ? calculateOptimalPinholeDiameterFromMm(inputs.focalLength): '',
            [inches]: calculateOptimalPinholeDiameterFromMm(inputs.focalLength) ? (calculateOptimalPinholeDiameterFromMm(inputs.focalLength) * constants.units.inches.multiplierFromMillimeters).toFixed(2) : '',
            unit : state.results.optimalPinholeDiameter.unit
        },
        [constants.results.optimalFocalLength.variable]: {
            [millimeters]: calculateOptimalFocalLengthFromMm(inputs.diameter) ? calculateOptimalFocalLengthFromMm(inputs.diameter): '',
            [inches]: calculateOptimalFocalLengthFromMm(inputs.diameter) ? (calculateOptimalFocalLengthFromMm(inputs.diameter) * constants.units.inches.multiplierFromMillimeters).toFixed(2) : '',
            unit : state.results.optimalFocalLength.unit
        }

       
    }
}