
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcTransitionCode} from "./IfcTransitionCode.g"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcCurve} from "./IfcCurve.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcCompositeCurve} from "./IfcCompositeCurve.g"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccompositecurvesegment.htm
 */
export class IfcCompositeCurveSegment extends IfcGeometricRepresentationItem {
	Transition : IfcTransitionCode
	SameSense : IfcBoolean
	ParentCurve : IfcCurve

    get Dim() : IfcDimensionCount{throw "Derived property logic has not been implemented for Dim."} // derived
    set Dim(value : IfcDimensionCount){super.Dim = value}
	UsingCurves : Array<IfcCompositeCurve> // inverse

    constructor(transition : IfcTransitionCode, sameSense : IfcBoolean, parentCurve : IfcCurve) {
        super()
		this.UsingCurves = new Array<IfcCompositeCurve>()

		this.Transition = transition
		this.SameSense = sameSense
		this.ParentCurve = parentCurve

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Transition))
		parameters.push(BaseIfc.toStepValue(this.SameSense))
		parameters.push(BaseIfc.toStepValue(this.ParentCurve))

        return parameters.join();
    }
}