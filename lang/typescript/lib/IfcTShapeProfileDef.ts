
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

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctshapeprofiledef.htm
export class IfcTShapeProfileDef extends IfcParameterizedProfileDef {
	Depth : IfcPositiveLengthMeasure
	FlangeWidth : IfcPositiveLengthMeasure
	WebThickness : IfcPositiveLengthMeasure
	FlangeThickness : IfcPositiveLengthMeasure
	FilletRadius : IfcNonNegativeLengthMeasure// optional
	FlangeEdgeRadius : IfcNonNegativeLengthMeasure// optional
	WebEdgeRadius : IfcNonNegativeLengthMeasure// optional
	WebSlope : IfcPlaneAngleMeasure// optional
	FlangeSlope : IfcPlaneAngleMeasure// optional

    constructor(profileType : IfcProfileTypeEnum, depth : IfcPositiveLengthMeasure, flangeWidth : IfcPositiveLengthMeasure, webThickness : IfcPositiveLengthMeasure, flangeThickness : IfcPositiveLengthMeasure) {
        super(profileType)

		this.Depth = depth
		this.FlangeWidth = flangeWidth
		this.WebThickness = webThickness
		this.FlangeThickness = flangeThickness

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.toStepValue(this.ProfileType));
		parameters.push(this.ProfileName != null ? this.toStepValue(this.ProfileName) : "$");
		parameters.push(this.Position != null ? this.toStepValue(this.Position) : "$");
		parameters.push(this.Depth != null ? this.toStepValue(this.Depth) : "$");
		parameters.push(this.FlangeWidth != null ? this.toStepValue(this.FlangeWidth) : "$");
		parameters.push(this.WebThickness != null ? this.toStepValue(this.WebThickness) : "$");
		parameters.push(this.FlangeThickness != null ? this.toStepValue(this.FlangeThickness) : "$");
		parameters.push(this.FilletRadius != null ? this.toStepValue(this.FilletRadius) : "$");
		parameters.push(this.FlangeEdgeRadius != null ? this.toStepValue(this.FlangeEdgeRadius) : "$");
		parameters.push(this.WebEdgeRadius != null ? this.toStepValue(this.WebEdgeRadius) : "$");
		parameters.push(this.WebSlope != null ? this.toStepValue(this.WebSlope) : "$");
		parameters.push(this.FlangeSlope != null ? this.toStepValue(this.FlangeSlope) : "$");

        return parameters.join();
    }
}