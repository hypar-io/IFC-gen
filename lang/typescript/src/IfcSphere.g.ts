
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcCsgPrimitive3D} from "./IfcCsgPrimitive3D.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsphere.htm
 */
export class IfcSphere extends IfcCsgPrimitive3D {
	Radius : IfcPositiveLengthMeasure

    constructor(position : IfcAxis2Placement3D, radius : IfcPositiveLengthMeasure) {
        super(position)
		this.Radius = radius

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.Radius))

        return parameters.join();
    }
}