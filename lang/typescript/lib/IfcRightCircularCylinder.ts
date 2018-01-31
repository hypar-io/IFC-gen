
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure"
import {IfcCsgPrimitive3D} from "./IfcCsgPrimitive3D"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrightcircularcylinder.htm
export class IfcRightCircularCylinder extends IfcCsgPrimitive3D {
	Height : IfcPositiveLengthMeasure
	Radius : IfcPositiveLengthMeasure

    constructor(position : IfcAxis2Placement3D, height : IfcPositiveLengthMeasure, radius : IfcPositiveLengthMeasure) {
        super(position)

		this.Height = height
		this.Radius = radius

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Position != null ? this.toStepValue(this.Position) : "$");
		parameters.push(this.Height != null ? this.toStepValue(this.Height) : "$");
		parameters.push(this.Radius != null ? this.toStepValue(this.Radius) : "$");

        return parameters.join();
    }
}