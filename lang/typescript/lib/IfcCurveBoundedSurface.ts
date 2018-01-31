
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcSurface} from "./IfcSurface"
import {IfcBoundaryCurve} from "./IfcBoundaryCurve"
import {IfcBoolean} from "./IfcBoolean"
import {IfcBoundedSurface} from "./IfcBoundedSurface"

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