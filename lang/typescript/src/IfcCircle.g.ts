
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcAxis2Placement2D} from "./IfcAxis2Placement2D.g"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcConic} from "./IfcConic.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccircle.htm
 */
export class IfcCircle extends IfcConic {
	Radius : IfcPositiveLengthMeasure

    constructor(position : IfcAxis2Placement2D|IfcAxis2Placement3D, radius : IfcPositiveLengthMeasure) {
        super(position)

		this.Radius = radius

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Position != null ? BaseIfc.toStepValue(this.Position) : "$");
		parameters.push(this.Radius != null ? BaseIfc.toStepValue(this.Radius) : "$");

        return parameters.join();
    }
}