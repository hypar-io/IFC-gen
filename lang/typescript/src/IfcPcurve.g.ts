
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcSurface} from "./IfcSurface.g"
import {IfcCurve} from "./IfcCurve.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpcurve.htm
 */
export class IfcPcurve extends IfcCurve {
	BasisSurface : IfcSurface
	ReferenceCurve : IfcCurve

    constructor(basisSurface : IfcSurface, referenceCurve : IfcCurve) {
        super()

		this.BasisSurface = basisSurface
		this.ReferenceCurve = referenceCurve

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.BasisSurface != null ? BaseIfc.toStepValue(this.BasisSurface) : "$");
		parameters.push(this.ReferenceCurve != null ? BaseIfc.toStepValue(this.ReferenceCurve) : "$");

        return parameters.join();
    }
}