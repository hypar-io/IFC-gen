
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcElementarySurface} from "./IfcElementarySurface.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctoroidalsurface.htm
 */
export class IfcToroidalSurface extends IfcElementarySurface {
	MajorRadius : IfcPositiveLengthMeasure
	MinorRadius : IfcPositiveLengthMeasure

    constructor(position : IfcAxis2Placement3D, majorRadius : IfcPositiveLengthMeasure, minorRadius : IfcPositiveLengthMeasure) {
        super(position)

		this.MajorRadius = majorRadius
		this.MinorRadius = minorRadius

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.MajorRadius))
		parameters.push(BaseIfc.toStepValue(this.MinorRadius))

        return parameters.join();
    }
}