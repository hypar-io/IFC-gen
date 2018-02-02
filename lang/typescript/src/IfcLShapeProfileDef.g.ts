
import {BaseIfc} from "./BaseIfc"
import {IfcProfileTypeEnum} from "./IfcProfileTypeEnum.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcProfileProperties} from "./IfcProfileProperties.g"
import {IfcAxis2Placement2D} from "./IfcAxis2Placement2D.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcNonNegativeLengthMeasure} from "./IfcNonNegativeLengthMeasure.g"
import {IfcPlaneAngleMeasure} from "./IfcPlaneAngleMeasure.g"
import {IfcParameterizedProfileDef} from "./IfcParameterizedProfileDef.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclshapeprofiledef.htm
 */
export class IfcLShapeProfileDef extends IfcParameterizedProfileDef {
	Depth : IfcPositiveLengthMeasure
	Width : IfcPositiveLengthMeasure // optional
	Thickness : IfcPositiveLengthMeasure
	FilletRadius : IfcNonNegativeLengthMeasure // optional
	EdgeRadius : IfcNonNegativeLengthMeasure // optional
	LegSlope : IfcPlaneAngleMeasure // optional

    constructor(profileType : IfcProfileTypeEnum, depth : IfcPositiveLengthMeasure, thickness : IfcPositiveLengthMeasure) {
        super(profileType)

		this.Depth = depth
		this.Thickness = thickness

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.ProfileType));
		parameters.push(this.ProfileName != null ? BaseIfc.toStepValue(this.ProfileName) : "$");
		parameters.push(this.Position != null ? BaseIfc.toStepValue(this.Position) : "$");
		parameters.push(this.Depth != null ? BaseIfc.toStepValue(this.Depth) : "$");
		parameters.push(this.Width != null ? BaseIfc.toStepValue(this.Width) : "$");
		parameters.push(this.Thickness != null ? BaseIfc.toStepValue(this.Thickness) : "$");
		parameters.push(this.FilletRadius != null ? BaseIfc.toStepValue(this.FilletRadius) : "$");
		parameters.push(this.EdgeRadius != null ? BaseIfc.toStepValue(this.EdgeRadius) : "$");
		parameters.push(this.LegSlope != null ? BaseIfc.toStepValue(this.LegSlope) : "$");

        return parameters.join();
    }
}