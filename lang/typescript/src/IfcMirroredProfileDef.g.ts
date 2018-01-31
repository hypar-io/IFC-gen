
import {BaseIfc} from "./BaseIfc"
import {IfcProfileTypeEnum} from "./IfcProfileTypeEnum.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcProfileProperties} from "./IfcProfileProperties.g"
import {IfcProfileDef} from "./IfcProfileDef.g"
import {IfcCartesianTransformationOperator2D} from "./IfcCartesianTransformationOperator2D.g"
import {IfcDerivedProfileDef} from "./IfcDerivedProfileDef.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmirroredprofiledef.htm
export class IfcMirroredProfileDef extends IfcDerivedProfileDef {

    get Operator() : IfcCartesianTransformationOperator2D{throw "Derived property logic has been implemented for Operator."} // derived

    constructor(profileType : IfcProfileTypeEnum, parentProfile : IfcProfileDef, op : IfcCartesianTransformationOperator2D) {
        super(profileType,parentProfile,op)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.toStepValue(this.ProfileType));
		parameters.push(this.ProfileName != null ? this.toStepValue(this.ProfileName) : "$");
		parameters.push(this.ParentProfile != null ? this.toStepValue(this.ParentProfile) : "$");
		parameters.push("*");
		parameters.push(this.Label != null ? this.toStepValue(this.Label) : "$");

        return parameters.join();
    }
}