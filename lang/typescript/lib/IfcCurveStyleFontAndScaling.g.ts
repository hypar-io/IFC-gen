
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcCurveStyleFontSelect} from "./IfcCurveStyleFontSelect"
import {IfcPositiveRatioMeasure} from "./IfcPositiveRatioMeasure"
import {IfcPresentationItem} from "./IfcPresentationItem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurvestylefontandscaling.htm
export class IfcCurveStyleFontAndScaling extends IfcPresentationItem {
	Name : IfcLabel// optional
	CurveFont : IfcCurveStyleFontSelect
	CurveFontScaling : IfcPositiveRatioMeasure

    constructor(curveFont : IfcCurveStyleFontSelect, curveFontScaling : IfcPositiveRatioMeasure) {
        super()

		this.CurveFont = curveFont
		this.CurveFontScaling = curveFontScaling

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.CurveFont != null ? this.toStepValue(this.CurveFont) : "$");
		parameters.push(this.CurveFontScaling != null ? this.toStepValue(this.CurveFontScaling) : "$");

        return parameters.join();
    }
}