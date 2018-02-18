
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcCompositeCurveSegment} from "./IfcCompositeCurveSegment.g"
import {IfcLogical} from "./IfcLogical.g"
import {IfcInteger} from "./IfcInteger.g"
import {IfcBoundedCurve} from "./IfcBoundedCurve.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccompositecurve.htm
 */
export class IfcCompositeCurve extends IfcBoundedCurve {
	Segments : Array<IfcCompositeCurveSegment>
	SelfIntersect : IfcLogical

    get NSegments() : IfcInteger{throw "Derived property logic has not been implemented for NSegments."} // derived
    set NSegments(value : IfcInteger){super.NSegments = value}

    get ClosedCurve() : IfcLogical{throw "Derived property logic has not been implemented for ClosedCurve."} // derived
    set ClosedCurve(value : IfcLogical){super.ClosedCurve = value}

    constructor(segments : Array<IfcCompositeCurveSegment>, selfIntersect : IfcLogical) {
        super()

		this.Segments = segments
		this.SelfIntersect = selfIntersect

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Segments))
		parameters.push(BaseIfc.toStepValue(this.SelfIntersect))

        return parameters.join();
    }
}