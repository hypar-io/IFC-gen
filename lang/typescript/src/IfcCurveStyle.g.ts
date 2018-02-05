
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcCurveStyleFontAndScaling} from "./IfcCurveStyleFontAndScaling.g"
import {IfcCurveStyleFont} from "./IfcCurveStyleFont.g"
import {IfcPreDefinedCurveFont} from "./IfcPreDefinedCurveFont.g"
import {IfcDescriptiveMeasure} from "./IfcDescriptiveMeasure.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcNormalisedRatioMeasure} from "./IfcNormalisedRatioMeasure.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcPositiveRatioMeasure} from "./IfcPositiveRatioMeasure.g"
import {IfcRatioMeasure} from "./IfcRatioMeasure.g"
import {IfcColourSpecification} from "./IfcColourSpecification.g"
import {IfcPreDefinedColour} from "./IfcPreDefinedColour.g"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcPresentationStyle} from "./IfcPresentationStyle.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurvestyle.htm
 */
export class IfcCurveStyle extends IfcPresentationStyle {
	CurveFont : IfcCurveStyleFontAndScaling|IfcCurveStyleFont|IfcPreDefinedCurveFont // optional
	CurveWidth : IfcDescriptiveMeasure|IfcLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveLengthMeasure|IfcPositiveRatioMeasure|IfcRatioMeasure // optional
	CurveColour : IfcColourSpecification|IfcPreDefinedColour // optional
	ModelOrDraughting : IfcBoolean // optional

    constructor() {
        super()

    }
    getStepParameters() : string {
            var parameters = new Array<string>();
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.CurveFont))
		parameters.push(BaseIfc.toStepValue(this.CurveWidth))
		parameters.push(BaseIfc.toStepValue(this.CurveColour))
		parameters.push(BaseIfc.toStepValue(this.ModelOrDraughting))

            return parameters.join();
        }
}