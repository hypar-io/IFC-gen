
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure"
import {IfcElementarySurface} from "./IfcElementarySurface"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctoroidalsurface.htm
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
		parameters.push(this.Position != null ? this.toStepValue(this.Position) : "$");
		parameters.push(this.MajorRadius != null ? this.toStepValue(this.MajorRadius) : "$");
		parameters.push(this.MinorRadius != null ? this.toStepValue(this.MinorRadius) : "$");

        return parameters.join();
    }
}