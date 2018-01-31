
import {BaseIfc} from "./BaseIfc"
import {IfcProfileTypeEnum} from "./IfcProfileTypeEnum.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcProfileProperties} from "./IfcProfileProperties.g"
import {IfcProfileDef} from "./IfcProfileDef.g"
import {IfcCartesianTransformationOperator2D} from "./IfcCartesianTransformationOperator2D.g"
import {IfcMirroredProfileDef} from "./IfcMirroredProfileDef.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcderivedprofiledef.htm
export class IfcDerivedProfileDef extends IfcProfileDef {
	ParentProfile : IfcProfileDef
	Operator : IfcCartesianTransformationOperator2D
	Label : IfcLabel// optional

    constructor(profileType : IfcProfileTypeEnum, parentProfile : IfcProfileDef, op : IfcCartesianTransformationOperator2D) {
        super(profileType)

		this.ParentProfile = parentProfile
		this.Operator = op

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.toStepValue(this.ProfileType));
		parameters.push(this.ProfileName != null ? this.toStepValue(this.ProfileName) : "$");
		parameters.push(this.ParentProfile != null ? this.toStepValue(this.ParentProfile) : "$");
		parameters.push(this.Operator != null ? this.toStepValue(this.Operator) : "$");
		parameters.push(this.Label != null ? this.toStepValue(this.Label) : "$");

        return parameters.join();
    }
}