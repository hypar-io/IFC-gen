
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcPlane} from "./IfcPlane"
import {IfcCurve} from "./IfcCurve"
import {IfcBoundedSurface} from "./IfcBoundedSurface"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurveboundedplane.htm
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
		parameters.push(this.BasisSurface != null ? this.toStepValue(this.BasisSurface) : "$");
		parameters.push(this.OuterBoundary != null ? this.toStepValue(this.OuterBoundary) : "$");
		parameters.push(this.InnerBoundaries != null ? this.toStepValue(this.InnerBoundaries) : "$");

        return parameters.join();
    }
}