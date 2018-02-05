
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

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreparametrisedcompositecurvesegment.htm
 */
export class IfcReparametrisedCompositeCurveSegment extends IfcCompositeCurveSegment {
	ParamLength : IfcParameterValue

    constructor(transition : IfcTransitionCode, sameSense : IfcBoolean, parentCurve : IfcCurve, paramLength : IfcParameterValue) {
        super(transition,sameSense,parentCurve)

		this.ParamLength = paramLength

    }
    getStepParameters() : string {
            var parameters = new Array<string>();
    		parameters.push(BaseIfc.toStepValue(this.Transition))
		parameters.push(BaseIfc.toStepValue(this.SameSense))
		parameters.push(BaseIfc.toStepValue(this.ParentCurve))
		parameters.push(BaseIfc.toStepValue(this.ParamLength))

            return parameters.join();
        }
}