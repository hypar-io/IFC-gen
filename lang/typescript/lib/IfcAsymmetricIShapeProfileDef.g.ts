
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

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcasymmetricishapeprofiledef.htm
export class IfcAsymmetricIShapeProfileDef extends IfcParameterizedProfileDef {
	BottomFlangeWidth : IfcPositiveLengthMeasure
	OverallDepth : IfcPositiveLengthMeasure
	WebThickness : IfcPositiveLengthMeasure
	BottomFlangeThickness : IfcPositiveLengthMeasure
	BottomFlangeFilletRadius : IfcNonNegativeLengthMeasure// optional
	TopFlangeWidth : IfcPositiveLengthMeasure
	TopFlangeThickness : IfcPositiveLengthMeasure// optional
	TopFlangeFilletRadius : IfcNonNegativeLengthMeasure// optional
	BottomFlangeEdgeRadius : IfcNonNegativeLengthMeasure// optional
	BottomFlangeSlope : IfcPlaneAngleMeasure// optional
	TopFlangeEdgeRadius : IfcNonNegativeLengthMeasure// optional
	TopFlangeSlope : IfcPlaneAngleMeasure// optional

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
		parameters.push(this.toStepValue(this.ProfileType));
		parameters.push(this.ProfileName != null ? this.toStepValue(this.ProfileName) : "$");
		parameters.push(this.Position != null ? this.toStepValue(this.Position) : "$");
		parameters.push(this.BottomFlangeWidth != null ? this.toStepValue(this.BottomFlangeWidth) : "$");
		parameters.push(this.OverallDepth != null ? this.toStepValue(this.OverallDepth) : "$");
		parameters.push(this.WebThickness != null ? this.toStepValue(this.WebThickness) : "$");
		parameters.push(this.BottomFlangeThickness != null ? this.toStepValue(this.BottomFlangeThickness) : "$");
		parameters.push(this.BottomFlangeFilletRadius != null ? this.toStepValue(this.BottomFlangeFilletRadius) : "$");
		parameters.push(this.TopFlangeWidth != null ? this.toStepValue(this.TopFlangeWidth) : "$");
		parameters.push(this.TopFlangeThickness != null ? this.toStepValue(this.TopFlangeThickness) : "$");
		parameters.push(this.TopFlangeFilletRadius != null ? this.toStepValue(this.TopFlangeFilletRadius) : "$");
		parameters.push(this.BottomFlangeEdgeRadius != null ? this.toStepValue(this.BottomFlangeEdgeRadius) : "$");
		parameters.push(this.BottomFlangeSlope != null ? this.toStepValue(this.BottomFlangeSlope) : "$");
		parameters.push(this.TopFlangeEdgeRadius != null ? this.toStepValue(this.TopFlangeEdgeRadius) : "$");
		parameters.push(this.TopFlangeSlope != null ? this.toStepValue(this.TopFlangeSlope) : "$");

        return parameters.join();
    }
}