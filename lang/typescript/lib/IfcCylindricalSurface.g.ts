
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure"
import {IfcElementarySurface} from "./IfcElementarySurface"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccylindricalsurface.htm
export class IfcCylindricalSurface extends IfcElementarySurface {
	Radius : IfcPositiveLengthMeasure

    constructor(position : IfcAxis2Placement3D, radius : IfcPositiveLengthMeasure) {
        super(position)

		this.Radius = radius

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Position != null ? this.toStepValue(this.Position) : "$");
		parameters.push(this.Radius != null ? this.toStepValue(this.Radius) : "$");

        return parameters.join();
    }
}