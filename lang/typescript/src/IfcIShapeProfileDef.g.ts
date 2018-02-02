
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
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcishapeprofiledef.htm
 */
export class IfcIShapeProfileDef extends IfcParameterizedProfileDef {
	OverallWidth : IfcPositiveLengthMeasure
	OverallDepth : IfcPositiveLengthMeasure
	WebThickness : IfcPositiveLengthMeasure
	FlangeThickness : IfcPositiveLengthMeasure
	FilletRadius : IfcNonNegativeLengthMeasure // optional
	FlangeEdgeRadius : IfcNonNegativeLengthMeasure // optional
	FlangeSlope : IfcPlaneAngleMeasure // optional

    constructor(profileType : IfcProfileTypeEnum, overallWidth : IfcPositiveLengthMeasure, overallDepth : IfcPositiveLengthMeasure, webThickness : IfcPositiveLengthMeasure, flangeThickness : IfcPositiveLengthMeasure) {
        super(profileType)

		this.OverallWidth = overallWidth
		this.OverallDepth = overallDepth
		this.WebThickness = webThickness
		this.FlangeThickness = flangeThickness

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.ProfileType));
		parameters.push(this.ProfileName != null ? BaseIfc.toStepValue(this.ProfileName) : "$");
		parameters.push(this.Position != null ? BaseIfc.toStepValue(this.Position) : "$");
		parameters.push(this.OverallWidth != null ? BaseIfc.toStepValue(this.OverallWidth) : "$");
		parameters.push(this.OverallDepth != null ? BaseIfc.toStepValue(this.OverallDepth) : "$");
		parameters.push(this.WebThickness != null ? BaseIfc.toStepValue(this.WebThickness) : "$");
		parameters.push(this.FlangeThickness != null ? BaseIfc.toStepValue(this.FlangeThickness) : "$");
		parameters.push(this.FilletRadius != null ? BaseIfc.toStepValue(this.FilletRadius) : "$");
		parameters.push(this.FlangeEdgeRadius != null ? BaseIfc.toStepValue(this.FlangeEdgeRadius) : "$");
		parameters.push(this.FlangeSlope != null ? BaseIfc.toStepValue(this.FlangeSlope) : "$");

        return parameters.join();
    }
}