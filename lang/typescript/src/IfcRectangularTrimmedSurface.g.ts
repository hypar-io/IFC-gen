
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcSurface} from "./IfcSurface.g"
import {IfcParameterValue} from "./IfcParameterValue.g"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcBoundedSurface} from "./IfcBoundedSurface.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrectangulartrimmedsurface.htm
 */
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
		parameters.push(this.BasisSurface != null ? BaseIfc.toStepValue(this.BasisSurface) : "$");
		parameters.push(this.U1 != null ? BaseIfc.toStepValue(this.U1) : "$");
		parameters.push(this.V1 != null ? BaseIfc.toStepValue(this.V1) : "$");
		parameters.push(this.U2 != null ? BaseIfc.toStepValue(this.U2) : "$");
		parameters.push(this.V2 != null ? BaseIfc.toStepValue(this.V2) : "$");
		parameters.push(this.Usense != null ? BaseIfc.toStepValue(this.Usense) : "$");
		parameters.push(this.Vsense != null ? BaseIfc.toStepValue(this.Vsense) : "$");

        return parameters.join();
    }
}