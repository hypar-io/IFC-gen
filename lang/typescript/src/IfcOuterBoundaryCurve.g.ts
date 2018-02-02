
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcCompositeCurveSegment} from "./IfcCompositeCurveSegment.g"
import {IfcLogical} from "./IfcLogical.g"
import {IfcInteger} from "./IfcInteger.g"
import {IfcSurface} from "./IfcSurface.g"
import {IfcBoundaryCurve} from "./IfcBoundaryCurve.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcouterboundarycurve.htm
 */
export class IfcOuterBoundaryCurve extends IfcBoundaryCurve {

    constructor(segments : Array<IfcCompositeCurveSegment>, selfIntersect : IfcLogical) {
        super(segments,selfIntersect)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Segments != null ? BaseIfc.toStepValue(this.Segments) : "$");
		parameters.push(this.SelfIntersect != null ? BaseIfc.toStepValue(this.SelfIntersect) : "$");

        return parameters.join();
    }
}