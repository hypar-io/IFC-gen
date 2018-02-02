
import {BaseIfc} from "./BaseIfc"
import {IfcProfileTypeEnum} from "./IfcProfileTypeEnum.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcProfileProperties} from "./IfcProfileProperties.g"
import {IfcAxis2Placement2D} from "./IfcAxis2Placement2D.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcNonNegativeLengthMeasure} from "./IfcNonNegativeLengthMeasure.g"
import {IfcParameterizedProfileDef} from "./IfcParameterizedProfileDef.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifczshapeprofiledef.htm
 */
export class IfcZShapeProfileDef extends IfcParameterizedProfileDef {
	Depth : IfcPositiveLengthMeasure
	FlangeWidth : IfcPositiveLengthMeasure
	WebThickness : IfcPositiveLengthMeasure
	FlangeThickness : IfcPositiveLengthMeasure
	FilletRadius : IfcNonNegativeLengthMeasure // optional
	EdgeRadius : IfcNonNegativeLengthMeasure // optional

    constructor(profileType : IfcProfileTypeEnum, depth : IfcPositiveLengthMeasure, flangeWidth : IfcPositiveLengthMeasure, webThickness : IfcPositiveLengthMeasure, flangeThickness : IfcPositiveLengthMeasure) {
        super(profileType)

		this.Depth = depth
		this.FlangeWidth = flangeWidth
		this.WebThickness = webThickness
		this.FlangeThickness = flangeThickness

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.ProfileType));
		parameters.push(this.ProfileName != null ? BaseIfc.toStepValue(this.ProfileName) : "$");
		parameters.push(this.Position != null ? BaseIfc.toStepValue(this.Position) : "$");
		parameters.push(this.Depth != null ? BaseIfc.toStepValue(this.Depth) : "$");
		parameters.push(this.FlangeWidth != null ? BaseIfc.toStepValue(this.FlangeWidth) : "$");
		parameters.push(this.WebThickness != null ? BaseIfc.toStepValue(this.WebThickness) : "$");
		parameters.push(this.FlangeThickness != null ? BaseIfc.toStepValue(this.FlangeThickness) : "$");
		parameters.push(this.FilletRadius != null ? BaseIfc.toStepValue(this.FilletRadius) : "$");
		parameters.push(this.EdgeRadius != null ? BaseIfc.toStepValue(this.EdgeRadius) : "$");

        return parameters.join();
    }
}