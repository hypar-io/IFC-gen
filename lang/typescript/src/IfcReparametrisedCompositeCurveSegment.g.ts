
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcTransitionCode} from "./IfcTransitionCode.g"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcCurve} from "./IfcCurve.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcCompositeCurve} from "./IfcCompositeCurve.g"
import {IfcParameterValue} from "./IfcParameterValue.g"
import {IfcCompositeCurveSegment} from "./IfcCompositeCurveSegment.g"

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