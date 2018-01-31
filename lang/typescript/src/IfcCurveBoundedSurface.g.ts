
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcSurface} from "./IfcSurface.g"
import {IfcBoundaryCurve} from "./IfcBoundaryCurve.g"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcBoundedSurface} from "./IfcBoundedSurface.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurveboundedsurface.htm
export class IfcCurveBoundedSurface extends IfcBoundedSurface {
	BasisSurface : IfcSurface
	Boundaries : Array<IfcBoundaryCurve>
	ImplicitOuter : IfcBoolean

    constructor(basisSurface : IfcSurface, boundaries : Array<IfcBoundaryCurve>, implicitOuter : IfcBoolean) {
        super()

		this.BasisSurface = basisSurface
		this.Boundaries = boundaries
		this.ImplicitOuter = implicitOuter

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.BasisSurface != null ? this.toStepValue(this.BasisSurface) : "$");
		parameters.push(this.Boundaries != null ? this.toStepValue(this.Boundaries) : "$");
		parameters.push(this.ImplicitOuter != null ? this.toStepValue(this.ImplicitOuter) : "$");

        return parameters.join();
    }
}