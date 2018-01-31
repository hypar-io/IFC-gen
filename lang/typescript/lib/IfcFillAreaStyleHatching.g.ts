
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcCurveStyle} from "./IfcCurveStyle"
import {IfcHatchLineDistanceSelect} from "./IfcHatchLineDistanceSelect"
import {IfcCartesianPoint} from "./IfcCartesianPoint"
import {IfcPlaneAngleMeasure} from "./IfcPlaneAngleMeasure"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfillareastylehatching.htm
export class IfcFillAreaStyleHatching extends IfcGeometricRepresentationItem {
	HatchLineAppearance : IfcCurveStyle
	StartOfNextHatchLine : IfcHatchLineDistanceSelect
	PointOfReferenceHatchLine : IfcCartesianPoint// optional
	PatternStart : IfcCartesianPoint// optional
	HatchLineAngle : IfcPlaneAngleMeasure

    constructor(hatchLineAppearance : IfcCurveStyle, startOfNextHatchLine : IfcHatchLineDistanceSelect, hatchLineAngle : IfcPlaneAngleMeasure) {
        super()

		this.HatchLineAppearance = hatchLineAppearance
		this.StartOfNextHatchLine = startOfNextHatchLine
		this.HatchLineAngle = hatchLineAngle

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.HatchLineAppearance != null ? this.toStepValue(this.HatchLineAppearance) : "$");
		parameters.push(this.StartOfNextHatchLine != null ? this.toStepValue(this.StartOfNextHatchLine) : "$");
		parameters.push(this.PointOfReferenceHatchLine != null ? this.toStepValue(this.PointOfReferenceHatchLine) : "$");
		parameters.push(this.PatternStart != null ? this.toStepValue(this.PatternStart) : "$");
		parameters.push(this.HatchLineAngle != null ? this.toStepValue(this.HatchLineAngle) : "$");

        return parameters.join();
    }
}