let constants = {
    inputs: {
        focalLength: {
            variable: 'focalLength',
            readibleName: "Focal Length"
        },
        diameter: {
            variable: 'diameter',
            readibleName: "Pinhole Diameter"
        },
        filmDimension: {
            variable: 'filmDimension',
            readibleName: 'Film Dimension'
        }
    },
    results: {
        fstop: {
            variable: "fStop",
            readibleName: "F-Stop"
        },
        angleOfView: {
            variable: "angleOfView",
            readibleName: "Angle of View"
        },
        imageDiameter: {
            variable: "imageDiameter",
            readibleName: "Image Diameter"
        },
        optimalPinholeDiameter: {
            variable: "optimalPinholeDiameter",
            readibleName: "Optimal Pinhole Diameter"
        },
        optimalFocalLength: {
            variable: "optimalFocalLength",
            readibleName: "Optimal Focal Length"
        }
    },
    units: {
        millimeters: {
            variable: "millimeters",
            readibleName: "mm",
            multiplierFromInches: 25.4
        },
        inches: {
            variable: "inches",
            readibleName: "in",
            multiplierFromMillimeters: .0393701
        }
    }
    
}

export default constants;