
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure"
import {IfcCsgPrimitive3D} from "./IfcCsgPrimitive3D"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrectangularpyramid.htm
export class IfcRectangularPyramid extends IfcCsgPrimitive3D {
	XLength : IfcPositiveLengthMeasure
	YLength : IfcPositiveLengthMeasure
	Height : IfcPositiveLengthMeasure

    constructor(position : IfcAxis2Placement3D, xLength : IfcPositiveLengthMeasure, yLength : IfcPositiveLengthMeasure, height : IfcPositiveLengthMeasure) {
        super(position)

		this.XLength = xLength
		this.YLength = yLength
		this.Height = height

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Position != null ? this.toStepValue(this.Position) : "$");
		parameters.push(this.XLength != null ? this.toStepValue(this.XLength) : "$");
		parameters.push(this.YLength != null ? this.toStepValue(this.YLength) : "$");
		parameters.push(this.Height != null ? this.toStepValue(this.Height) : "$");

        return parameters.join();
    }
}