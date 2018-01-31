
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcElementarySurface} from "./IfcElementarySurface.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsphericalsurface.htm
export class IfcSphericalSurface extends IfcElementarySurface {
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