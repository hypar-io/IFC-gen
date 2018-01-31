
import {BaseIfc} from "./BaseIfc"
import {IfcProfileTypeEnum} from "./IfcProfileTypeEnum"
import {IfcLabel} from "./IfcLabel"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcProfileProperties} from "./IfcProfileProperties"
import {IfcAxis2Placement2D} from "./IfcAxis2Placement2D"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure"
import {IfcNonNegativeLengthMeasure} from "./IfcNonNegativeLengthMeasure"
import {IfcPlaneAngleMeasure} from "./IfcPlaneAngleMeasure"
import {IfcParameterizedProfileDef} from "./IfcParameterizedProfileDef"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclshapeprofiledef.htm
export class IfcLShapeProfileDef extends IfcParameterizedProfileDef {
	Depth : IfcPositiveLengthMeasure
	Width : IfcPositiveLengthMeasure// optional
	Thickness : IfcPositiveLengthMeasure
	FilletRadius : IfcNonNegativeLengthMeasure// optional
	EdgeRadius : IfcNonNegativeLengthMeasure// optional
	LegSlope : IfcPlaneAngleMeasure// optional

    constructor(profileType : IfcProfileTypeEnum, depth : IfcPositiveLengthMeasure, thickness : IfcPositiveLengthMeasure) {
        super(profileType)

		this.Depth = depth
		this.Thickness = thickness

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.toStepValue(this.ProfileType));
		parameters.push(this.ProfileName != null ? this.toStepValue(this.ProfileName) : "$");
		parameters.push(this.Position != null ? this.toStepValue(this.Position) : "$");
		parameters.push(this.Depth != null ? this.toStepValue(this.Depth) : "$");
		parameters.push(this.Width != null ? this.toStepValue(this.Width) : "$");
		parameters.push(this.Thickness != null ? this.toStepValue(this.Thickness) : "$");
		parameters.push(this.FilletRadius != null ? this.toStepValue(this.FilletRadius) : "$");
		parameters.push(this.EdgeRadius != null ? this.toStepValue(this.EdgeRadius) : "$");
		parameters.push(this.LegSlope != null ? this.toStepValue(this.LegSlope) : "$");

        return parameters.join();
    }
}