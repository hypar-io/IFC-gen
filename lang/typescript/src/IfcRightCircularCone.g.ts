
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcCsgPrimitive3D} from "./IfcCsgPrimitive3D.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrightcircularcone.htm
export class IfcRightCircularCone extends IfcCsgPrimitive3D {
	Height : IfcPositiveLengthMeasure
	BottomRadius : IfcPositiveLengthMeasure

    constructor(position : IfcAxis2Placement3D, height : IfcPositiveLengthMeasure, bottomRadius : IfcPositiveLengthMeasure) {
        super(position)

		this.Height = height
		this.BottomRadius = bottomRadius

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Position != null ? this.toStepValue(this.Position) : "$");
		parameters.push(this.Height != null ? this.toStepValue(this.Height) : "$");
		parameters.push(this.BottomRadius != null ? this.toStepValue(this.BottomRadius) : "$");

        return parameters.join();
    }
}