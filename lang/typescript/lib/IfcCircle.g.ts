
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcAxis2Placement} from "./IfcAxis2Placement"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure"
import {IfcConic} from "./IfcConic"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccircle.htm
export class IfcCircle extends IfcConic {
	Radius : IfcPositiveLengthMeasure

    constructor(position : IfcAxis2Placement, radius : IfcPositiveLengthMeasure) {
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