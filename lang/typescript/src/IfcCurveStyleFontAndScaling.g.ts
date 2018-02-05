
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcCurveStyleFont} from "./IfcCurveStyleFont.g"
import {IfcPreDefinedCurveFont} from "./IfcPreDefinedCurveFont.g"
import {IfcPositiveRatioMeasure} from "./IfcPositiveRatioMeasure.g"
import {IfcPresentationItem} from "./IfcPresentationItem.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurvestylefontandscaling.htm
 */
export class IfcCurveStyleFontAndScaling extends IfcPresentationItem {
	Name : IfcLabel // optional
	CurveFont : IfcCurveStyleFont|IfcPreDefinedCurveFont
	CurveFontScaling : IfcPositiveRatioMeasure

    constructor(curveFont : IfcCurveStyleFont|IfcPreDefinedCurveFont, curveFontScaling : IfcPositiveRatioMeasure) {
        super()

		this.CurveFont = curveFont
		this.CurveFontScaling = curveFontScaling

    }
    getStepParameters() : string {
            var parameters = new Array<string>();
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.CurveFont))
		parameters.push(BaseIfc.toStepValue(this.CurveFontScaling))

            return parameters.join();
        }
}