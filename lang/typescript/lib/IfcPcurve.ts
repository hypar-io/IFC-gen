
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcSurface} from "./IfcSurface"
import {IfcCurve} from "./IfcCurve"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpcurve.htm
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
		parameters.push(this.BasisSurface != null ? this.toStepValue(this.BasisSurface) : "$");
		parameters.push(this.ReferenceCurve != null ? this.toStepValue(this.ReferenceCurve) : "$");

        return parameters.join();
    }
}