
import {BaseIfc} from "./BaseIfc"
import {IfcProfileTypeEnum} from "./IfcProfileTypeEnum.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcProfileProperties} from "./IfcProfileProperties.g"
import {IfcAxis2Placement2D} from "./IfcAxis2Placement2D.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcParameterizedProfileDef} from "./IfcParameterizedProfileDef.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctrapeziumprofiledef.htm
 */
export class IfcTrapeziumProfileDef extends IfcParameterizedProfileDef {
	BottomXDim : IfcPositiveLengthMeasure
	TopXDim : IfcPositiveLengthMeasure
	YDim : IfcPositiveLengthMeasure
	TopXOffset : IfcLengthMeasure

    constructor(profileType : IfcProfileTypeEnum, bottomXDim : IfcPositiveLengthMeasure, topXDim : IfcPositiveLengthMeasure, yDim : IfcPositiveLengthMeasure, topXOffset : IfcLengthMeasure) {
        super(profileType)

		this.BottomXDim = bottomXDim
		this.TopXDim = topXDim
		this.YDim = yDim
		this.TopXOffset = topXOffset

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.ProfileType));
		parameters.push(this.ProfileName != null ? BaseIfc.toStepValue(this.ProfileName) : "$");
		parameters.push(this.Position != null ? BaseIfc.toStepValue(this.Position) : "$");
		parameters.push(this.BottomXDim != null ? BaseIfc.toStepValue(this.BottomXDim) : "$");
		parameters.push(this.TopXDim != null ? BaseIfc.toStepValue(this.TopXDim) : "$");
		parameters.push(this.YDim != null ? BaseIfc.toStepValue(this.YDim) : "$");
		parameters.push(this.TopXOffset != null ? BaseIfc.toStepValue(this.TopXOffset) : "$");

        return parameters.join();
    }
}