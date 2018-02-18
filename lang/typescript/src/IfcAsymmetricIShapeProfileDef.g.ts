
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
		parameters.push(BaseIfc.toStepValue(this.ProfileType))
		parameters.push(BaseIfc.toStepValue(this.ProfileName))
		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.BottomFlangeWidth))
		parameters.push(BaseIfc.toStepValue(this.OverallDepth))
		parameters.push(BaseIfc.toStepValue(this.WebThickness))
		parameters.push(BaseIfc.toStepValue(this.BottomFlangeThickness))
		parameters.push(BaseIfc.toStepValue(this.BottomFlangeFilletRadius))
		parameters.push(BaseIfc.toStepValue(this.TopFlangeWidth))
		parameters.push(BaseIfc.toStepValue(this.TopFlangeThickness))
		parameters.push(BaseIfc.toStepValue(this.TopFlangeFilletRadius))
		parameters.push(BaseIfc.toStepValue(this.BottomFlangeEdgeRadius))
		parameters.push(BaseIfc.toStepValue(this.BottomFlangeSlope))
		parameters.push(BaseIfc.toStepValue(this.TopFlangeEdgeRadius))
		parameters.push(BaseIfc.toStepValue(this.TopFlangeSlope))

        return parameters.join();
    }
}