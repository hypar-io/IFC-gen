
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcSurface} from "./IfcSurface"
import {IfcParameterValue} from "./IfcParameterValue"
import {IfcBoolean} from "./IfcBoolean"
import {IfcBoundedSurface} from "./IfcBoundedSurface"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrectangulartrimmedsurface.htm
export class IfcRectangularTrimmedSurface extends IfcBoundedSurface {
	BasisSurface : IfcSurface
	U1 : IfcParameterValue
	V1 : IfcParameterValue
	U2 : IfcParameterValue
	V2 : IfcParameterValue
	Usense : IfcBoolean
	Vsense : IfcBoolean

    constructor(basisSurface : IfcSurface, u1 : IfcParameterValue, v1 : IfcParameterValue, u2 : IfcParameterValue, v2 : IfcParameterValue, usense : IfcBoolean, vsense : IfcBoolean) {
        super()

		this.BasisSurface = basisSurface
		this.U1 = u1
		this.V1 = v1
		this.U2 = u2
		this.V2 = v2
		this.Usense = usense
		this.Vsense = vsense

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.BasisSurface != null ? this.toStepValue(this.BasisSurface) : "$");
		parameters.push(this.U1 != null ? this.toStepValue(this.U1) : "$");
		parameters.push(this.V1 != null ? this.toStepValue(this.V1) : "$");
		parameters.push(this.U2 != null ? this.toStepValue(this.U2) : "$");
		parameters.push(this.V2 != null ? this.toStepValue(this.V2) : "$");
		parameters.push(this.Usense != null ? this.toStepValue(this.Usense) : "$");
		parameters.push(this.Vsense != null ? this.toStepValue(this.Vsense) : "$");

        return parameters.join();
    }
}