
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcCurve} from "./IfcCurve.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcLogical} from "./IfcLogical.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcoffsetcurve2d.htm
 */
export class IfcOffsetCurve2D extends IfcCurve {
	BasisCurve : IfcCurve
	Distance : IfcLengthMeasure
	SelfIntersect : IfcLogical

    constructor(basisCurve : IfcCurve, distance : IfcLengthMeasure, selfIntersect : IfcLogical) {
        super()

		this.BasisCurve = basisCurve
		this.Distance = distance
		this.SelfIntersect = selfIntersect

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.BasisCurve != null ? BaseIfc.toStepValue(this.BasisCurve) : "$");
		parameters.push(this.Distance != null ? BaseIfc.toStepValue(this.Distance) : "$");
		parameters.push(this.SelfIntersect != null ? BaseIfc.toStepValue(this.SelfIntersect) : "$");

        return parameters.join();
    }
}