
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcCompositeCurveSegment} from "./IfcCompositeCurveSegment"
import {IfcLogical} from "./IfcLogical"
import {IfcInteger} from "./IfcInteger"
import {IfcSurface} from "./IfcSurface"
import {IfcBoundaryCurve} from "./IfcBoundaryCurve"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcouterboundarycurve.htm
export class IfcOuterBoundaryCurve extends IfcBoundaryCurve {

    constructor(segments : Array<IfcCompositeCurveSegment>, selfIntersect : IfcLogical) {
        super(segments,selfIntersect)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Segments != null ? this.toStepValue(this.Segments) : "$");
		parameters.push(this.SelfIntersect != null ? this.toStepValue(this.SelfIntersect) : "$");

        return parameters.join();
    }
}