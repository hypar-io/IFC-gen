
import {BaseIfc} from "./BaseIfc"
import {IfcProfileTypeEnum} from "./IfcProfileTypeEnum"
import {IfcLabel} from "./IfcLabel"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcProfileProperties} from "./IfcProfileProperties"
import {IfcAxis2Placement2D} from "./IfcAxis2Placement2D"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure"
import {IfcParameterizedProfileDef} from "./IfcParameterizedProfileDef"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcellipseprofiledef.htm
export class IfcEllipseProfileDef extends IfcParameterizedProfileDef {
	SemiAxis1 : IfcPositiveLengthMeasure
	SemiAxis2 : IfcPositiveLengthMeasure

    constructor(profileType : IfcProfileTypeEnum, semiAxis1 : IfcPositiveLengthMeasure, semiAxis2 : IfcPositiveLengthMeasure) {
        super(profileType)

		this.SemiAxis1 = semiAxis1
		this.SemiAxis2 = semiAxis2

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.toStepValue(this.ProfileType));
		parameters.push(this.ProfileName != null ? this.toStepValue(this.ProfileName) : "$");
		parameters.push(this.Position != null ? this.toStepValue(this.Position) : "$");
		parameters.push(this.SemiAxis1 != null ? this.toStepValue(this.SemiAxis1) : "$");
		parameters.push(this.SemiAxis2 != null ? this.toStepValue(this.SemiAxis2) : "$");

        return parameters.join();
    }
}