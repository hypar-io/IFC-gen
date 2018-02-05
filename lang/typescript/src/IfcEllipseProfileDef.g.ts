
import {BaseIfc} from "./BaseIfc"
import {IfcProfileTypeEnum} from "./IfcProfileTypeEnum.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcProfileProperties} from "./IfcProfileProperties.g"
import {IfcAxis2Placement2D} from "./IfcAxis2Placement2D.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcParameterizedProfileDef} from "./IfcParameterizedProfileDef.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcellipseprofiledef.htm
 */
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
    		parameters.push(BaseIfc.toStepValue(this.ProfileType))
		parameters.push(BaseIfc.toStepValue(this.ProfileName))
		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.SemiAxis1))
		parameters.push(BaseIfc.toStepValue(this.SemiAxis2))

            return parameters.join();
        }
}