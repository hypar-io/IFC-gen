
import {BaseIfc} from "./BaseIfc"
import {IfcProfileTypeEnum} from "./IfcProfileTypeEnum.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcProfileProperties} from "./IfcProfileProperties.g"
import {IfcAxis2Placement2D} from "./IfcAxis2Placement2D.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcParameterizedProfileDef} from "./IfcParameterizedProfileDef.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctrapeziumprofiledef.htm
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
		parameters.push(this.toStepValue(this.ProfileType));
		parameters.push(this.ProfileName != null ? this.toStepValue(this.ProfileName) : "$");
		parameters.push(this.Position != null ? this.toStepValue(this.Position) : "$");
		parameters.push(this.BottomXDim != null ? this.toStepValue(this.BottomXDim) : "$");
		parameters.push(this.TopXDim != null ? this.toStepValue(this.TopXDim) : "$");
		parameters.push(this.YDim != null ? this.toStepValue(this.YDim) : "$");
		parameters.push(this.TopXOffset != null ? this.toStepValue(this.TopXOffset) : "$");

        return parameters.join();
    }
}