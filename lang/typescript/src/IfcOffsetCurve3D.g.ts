
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcCurve} from "./IfcCurve.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcLogical} from "./IfcLogical.g"
import {IfcDirection} from "./IfcDirection.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcoffsetcurve3d.htm
 */
export class IfcOffsetCurve3D extends IfcCurve {
	BasisCurve : IfcCurve
	Distance : IfcLengthMeasure
	SelfIntersect : IfcLogical
	RefDirection : IfcDirection

    constructor(basisCurve : IfcCurve, distance : IfcLengthMeasure, selfIntersect : IfcLogical, refDirection : IfcDirection) {
        super()

		this.BasisCurve = basisCurve
		this.Distance = distance
		this.SelfIntersect = selfIntersect
		this.RefDirection = refDirection

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.BasisCurve))
		parameters.push(BaseIfc.toStepValue(this.Distance))
		parameters.push(BaseIfc.toStepValue(this.SelfIntersect))
		parameters.push(BaseIfc.toStepValue(this.RefDirection))

        return parameters.join();
    }
}