
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcCurveStyle} from "./IfcCurveStyle.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcVector} from "./IfcVector.g"
import {IfcCartesianPoint} from "./IfcCartesianPoint.g"
import {IfcPlaneAngleMeasure} from "./IfcPlaneAngleMeasure.g"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfillareastylehatching.htm
 */
export class IfcFillAreaStyleHatching extends IfcGeometricRepresentationItem {
	HatchLineAppearance : IfcCurveStyle
	StartOfNextHatchLine : IfcPositiveLengthMeasure|IfcVector
	PointOfReferenceHatchLine : IfcCartesianPoint // optional
	PatternStart : IfcCartesianPoint // optional
	HatchLineAngle : IfcPlaneAngleMeasure

    constructor(hatchLineAppearance : IfcCurveStyle, startOfNextHatchLine : IfcPositiveLengthMeasure|IfcVector, hatchLineAngle : IfcPlaneAngleMeasure) {
        super()
		this.HatchLineAppearance = hatchLineAppearance
		this.StartOfNextHatchLine = startOfNextHatchLine
		this.HatchLineAngle = hatchLineAngle

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.HatchLineAppearance))
		parameters.push(BaseIfc.toStepValue(this.StartOfNextHatchLine))
		parameters.push(BaseIfc.toStepValue(this.PointOfReferenceHatchLine))
		parameters.push(BaseIfc.toStepValue(this.PatternStart))
		parameters.push(BaseIfc.toStepValue(this.HatchLineAngle))

        return parameters.join();
    }
}