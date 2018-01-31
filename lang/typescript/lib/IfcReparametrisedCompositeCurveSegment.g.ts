
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcTransitionCode} from "./IfcTransitionCode"
import {IfcBoolean} from "./IfcBoolean"
import {IfcCurve} from "./IfcCurve"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcCompositeCurve} from "./IfcCompositeCurve"
import {IfcParameterValue} from "./IfcParameterValue"
import {IfcCompositeCurveSegment} from "./IfcCompositeCurveSegment"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreparametrisedcompositecurvesegment.htm
export class IfcReparametrisedCompositeCurveSegment extends IfcCompositeCurveSegment {
	ParamLength : IfcParameterValue

    constructor(transition : IfcTransitionCode, sameSense : IfcBoolean, parentCurve : IfcCurve, paramLength : IfcParameterValue) {
        super(transition,sameSense,parentCurve)

		this.ParamLength = paramLength

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Transition != null ? this.toStepValue(this.Transition) : "$");
		parameters.push(this.SameSense != null ? this.toStepValue(this.SameSense) : "$");
		parameters.push(this.ParentCurve != null ? this.toStepValue(this.ParentCurve) : "$");
		parameters.push(this.ParamLength != null ? this.toStepValue(this.ParamLength) : "$");

        return parameters.join();
    }
}