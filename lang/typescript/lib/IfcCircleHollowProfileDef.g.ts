
import {BaseIfc} from "./BaseIfc"
import {IfcProfileTypeEnum} from "./IfcProfileTypeEnum.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcProfileProperties} from "./IfcProfileProperties.g"
import {IfcAxis2Placement2D} from "./IfcAxis2Placement2D.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcCircleProfileDef} from "./IfcCircleProfileDef.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccirclehollowprofiledef.htm
export class IfcCircleHollowProfileDef extends IfcCircleProfileDef {
	WallThickness : IfcPositiveLengthMeasure

    constructor(profileType : IfcProfileTypeEnum, radius : IfcPositiveLengthMeasure, wallThickness : IfcPositiveLengthMeasure) {
        super(profileType,radius)

		this.WallThickness = wallThickness

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.toStepValue(this.ProfileType));
		parameters.push(this.ProfileName != null ? this.toStepValue(this.ProfileName) : "$");
		parameters.push(this.Position != null ? this.toStepValue(this.Position) : "$");
		parameters.push(this.Radius != null ? this.toStepValue(this.Radius) : "$");
		parameters.push(this.WallThickness != null ? this.toStepValue(this.WallThickness) : "$");

        return parameters.join();
    }
}