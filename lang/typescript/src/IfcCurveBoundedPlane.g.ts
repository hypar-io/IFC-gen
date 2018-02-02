
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcPlane} from "./IfcPlane.g"
import {IfcCurve} from "./IfcCurve.g"
import {IfcBoundedSurface} from "./IfcBoundedSurface.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurveboundedplane.htm
 */
export class IfcCurveBoundedPlane extends IfcBoundedSurface {
	BasisSurface : IfcPlane
	OuterBoundary : IfcCurve
	InnerBoundaries : Array<IfcCurve>

    constructor(basisSurface : IfcPlane, outerBoundary : IfcCurve, innerBoundaries : Array<IfcCurve>) {
        super()

		this.BasisSurface = basisSurface
		this.OuterBoundary = outerBoundary
		this.InnerBoundaries = innerBoundaries

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.BasisSurface != null ? BaseIfc.toStepValue(this.BasisSurface) : "$");
		parameters.push(this.OuterBoundary != null ? BaseIfc.toStepValue(this.OuterBoundary) : "$");
		parameters.push(this.InnerBoundaries != null ? BaseIfc.toStepValue(this.InnerBoundaries) : "$");

        return parameters.join();
    }
}