
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
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcasymmetricishapeprofiledef.htm
 */
export class IfcAsymmetricIShapeProfileDef extends IfcParameterizedProfileDef {
	BottomFlangeWidth : IfcPositiveLengthMeasure
	OverallDepth : IfcPositiveLengthMeasure
	WebThickness : IfcPositiveLengthMeasure
	BottomFlangeThickness : IfcPositiveLengthMeasure
	BottomFlangeFilletRadius : IfcNonNegativeLengthMeasure // optional
	TopFlangeWidth : IfcPositiveLengthMeasure
	TopFlangeThickness : IfcPositiveLengthMeasure // optional
	TopFlangeFilletRadius : IfcNonNegativeLengthMeasure // optional
	BottomFlangeEdgeRadius : IfcNonNegativeLengthMeasure // optional
	BottomFlangeSlope : IfcPlaneAngleMeasure // optional
	TopFlangeEdgeRadius : IfcNonNegativeLengthMeasure // optional
	TopFlangeSlope : IfcPlaneAngleMeasure // optional

    constructor(profileType : IfcProfileTypeEnum, bottomFlangeWidth : IfcPositiveLengthMeasure, overallDepth : IfcPositiveLengthMeasure, webThickness : IfcPositiveLengthMeasure, bottomFlangeThickness : IfcPositiveLengthMeasure, topFlangeWidth : IfcPositiveLengthMeasure) {
        super(profileType)

		this.BottomFlangeWidth = bottomFlangeWidth
		this.OverallDepth = overallDepth
		this.WebThickness = webThickness
		this.BottomFlangeThickness = bottomFlangeThickness
		this.TopFlangeWidth = topFlangeWidth

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.ProfileType));
		parameters.push(this.ProfileName != null ? BaseIfc.toStepValue(this.ProfileName) : "$");
		parameters.push(this.Position != null ? BaseIfc.toStepValue(this.Position) : "$");
		parameters.push(this.BottomFlangeWidth != null ? BaseIfc.toStepValue(this.BottomFlangeWidth) : "$");
		parameters.push(this.OverallDepth != null ? BaseIfc.toStepValue(this.OverallDepth) : "$");
		parameters.push(this.WebThickness != null ? BaseIfc.toStepValue(this.WebThickness) : "$");
		parameters.push(this.BottomFlangeThickness != null ? BaseIfc.toStepValue(this.BottomFlangeThickness) : "$");
		parameters.push(this.BottomFlangeFilletRadius != null ? BaseIfc.toStepValue(this.BottomFlangeFilletRadius) : "$");
		parameters.push(this.TopFlangeWidth != null ? BaseIfc.toStepValue(this.TopFlangeWidth) : "$");
		parameters.push(this.TopFlangeThickness != null ? BaseIfc.toStepValue(this.TopFlangeThickness) : "$");
		parameters.push(this.TopFlangeFilletRadius != null ? BaseIfc.toStepValue(this.TopFlangeFilletRadius) : "$");
		parameters.push(this.BottomFlangeEdgeRadius != null ? BaseIfc.toStepValue(this.BottomFlangeEdgeRadius) : "$");
		parameters.push(this.BottomFlangeSlope != null ? BaseIfc.toStepValue(this.BottomFlangeSlope) : "$");
		parameters.push(this.TopFlangeEdgeRadius != null ? BaseIfc.toStepValue(this.TopFlangeEdgeRadius) : "$");
		parameters.push(this.TopFlangeSlope != null ? BaseIfc.toStepValue(this.TopFlangeSlope) : "$");

        return parameters.join();
    }
}