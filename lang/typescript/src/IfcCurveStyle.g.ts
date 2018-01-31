
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcCurveFontOrScaledCurveFontSelect} from "./IfcCurveFontOrScaledCurveFontSelect.g"
import {IfcSizeSelect} from "./IfcSizeSelect.g"
import {IfcColour} from "./IfcColour.g"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcPresentationStyle} from "./IfcPresentationStyle.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurvestyle.htm
export class IfcCurveStyle extends IfcPresentationStyle {
	CurveFont : IfcCurveFontOrScaledCurveFontSelect// optional
	CurveWidth : IfcSizeSelect// optional
	CurveColour : IfcColour// optional
	ModelOrDraughting : IfcBoolean// optional

    constructor() {
        super()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.CurveFont != null ? this.toStepValue(this.CurveFont) : "$");
		parameters.push(this.CurveWidth != null ? this.toStepValue(this.CurveWidth) : "$");
		parameters.push(this.CurveColour != null ? this.toStepValue(this.CurveColour) : "$");
		parameters.push(this.ModelOrDraughting != null ? this.toStepValue(this.ModelOrDraughting) : "$");

        return parameters.join();
    }
}