
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcTransitionCode} from "./IfcTransitionCode.g"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcCurve} from "./IfcCurve.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcCompositeCurve} from "./IfcCompositeCurve.g"
import {IfcReparametrisedCompositeCurveSegment} from "./IfcReparametrisedCompositeCurveSegment.g"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccompositecurvesegment.htm
export class IfcCompositeCurveSegment extends IfcGeometricRepresentationItem {
	Transition : IfcTransitionCode
	SameSense : IfcBoolean
	ParentCurve : IfcCurve

    get Dim() : IfcDimensionCount{throw "Derived property logic has been implemented for Dim."} // derived
	UsingCurves : Array<IfcCompositeCurve>// inverse

    constructor(transition : IfcTransitionCode, sameSense : IfcBoolean, parentCurve : IfcCurve) {
        super()
		this.UsingCurves = new Array<IfcCompositeCurve>()

		this.Transition = transition
		this.SameSense = sameSense
		this.ParentCurve = parentCurve

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Transition != null ? this.toStepValue(this.Transition) : "$");
		parameters.push(this.SameSense != null ? this.toStepValue(this.SameSense) : "$");
		parameters.push(this.ParentCurve != null ? this.toStepValue(this.ParentCurve) : "$");

        return parameters.join();
    }
}