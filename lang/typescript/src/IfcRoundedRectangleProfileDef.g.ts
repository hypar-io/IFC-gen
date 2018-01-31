
import {BaseIfc} from "./BaseIfc"
import {IfcProfileTypeEnum} from "./IfcProfileTypeEnum.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcProfileProperties} from "./IfcProfileProperties.g"
import {IfcAxis2Placement2D} from "./IfcAxis2Placement2D.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcRectangleProfileDef} from "./IfcRectangleProfileDef.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcroundedrectangleprofiledef.htm
export class IfcRoundedRectangleProfileDef extends IfcRectangleProfileDef {
	RoundingRadius : IfcPositiveLengthMeasure

    constructor(profileType : IfcProfileTypeEnum, xDim : IfcPositiveLengthMeasure, yDim : IfcPositiveLengthMeasure, roundingRadius : IfcPositiveLengthMeasure) {
        super(profileType,xDim,yDim)

		this.RoundingRadius = roundingRadius

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.toStepValue(this.ProfileType));
		parameters.push(this.ProfileName != null ? this.toStepValue(this.ProfileName) : "$");
		parameters.push(this.Position != null ? this.toStepValue(this.Position) : "$");
		parameters.push(this.XDim != null ? this.toStepValue(this.XDim) : "$");
		parameters.push(this.YDim != null ? this.toStepValue(this.YDim) : "$");
		parameters.push(this.RoundingRadius != null ? this.toStepValue(this.RoundingRadius) : "$");

        return parameters.join();
    }
}