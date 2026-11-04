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
        filmWidth: {
            variable: 'filmWidth',
            readibleName: "Film Dimension"
        },
        filmHeight: {
            variable: 'filmHeight',
            readibleName: ""
        }
    },
    results: {
        fstop: {
            variable: "fStop",
            readibleName: "F-Stop"
        },
        lensEquivalent35mm: {
            variable: "lensEquivalent35mm",
            readibleName: "35mm Lens Equivalent"
        },
        angleOfView: {
            variable: "angleOfView",
            readibleName: "Angle of View"
        },
        optimalPinholeDiameter: {
            variable: "optimalPinholeDiameter",
            readibleName: "Optimal Pinhole Diameter"
        },
        imageDiameter: {
            variable: "imageDiameter",
            readibleName: "Image Diameter"
        }
    },
    tabs: {
        basic: "basic",
        advanced: "advanced"
    },
    // inputs that share one unit toggle, keyed by the toggle's label
    linkedInputs: {
        filmDimension: ["filmWidth", "filmHeight"]
    },
    fullFrameDiagonalMm: 43.27,
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
