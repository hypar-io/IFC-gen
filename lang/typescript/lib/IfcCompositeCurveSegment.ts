
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcTransitionCode} from "./IfcTransitionCode"
import {IfcBoolean} from "./IfcBoolean"
import {IfcCurve} from "./IfcCurve"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcCompositeCurve} from "./IfcCompositeCurve"
import {IfcReparametrisedCompositeCurveSegment} from "./IfcReparametrisedCompositeCurveSegment"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem"

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