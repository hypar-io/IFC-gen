
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcCompositeCurveSegment} from "./IfcCompositeCurveSegment"
import {IfcLogical} from "./IfcLogical"
import {IfcInteger} from "./IfcInteger"
import {IfcCompositeCurveOnSurface} from "./IfcCompositeCurveOnSurface"
import {IfcBoundedCurve} from "./IfcBoundedCurve"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccompositecurve.htm
export class IfcCompositeCurve extends IfcBoundedCurve {
	Segments : Array<IfcCompositeCurveSegment>
	SelfIntersect : IfcLogical

    get NSegments() : IfcInteger{throw "Derived property logic has been implemented for NSegments."} // derived

    get ClosedCurve() : IfcLogical{throw "Derived property logic has been implemented for ClosedCurve."} // derived

    constructor(segments : Array<IfcCompositeCurveSegment>, selfIntersect : IfcLogical) {
        super()

		this.Segments = segments
		this.SelfIntersect = selfIntersect

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Segments != null ? this.toStepValue(this.Segments) : "$");
		parameters.push(this.SelfIntersect != null ? this.toStepValue(this.SelfIntersect) : "$");

        return parameters.join();
    }
}