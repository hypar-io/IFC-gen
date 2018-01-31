
import {BaseIfc} from "./BaseIfc"
import {IfcProfileTypeEnum} from "./IfcProfileTypeEnum"
import {IfcLabel} from "./IfcLabel"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcProfileProperties} from "./IfcProfileProperties"
import {IfcProfileDef} from "./IfcProfileDef"
import {IfcCartesianTransformationOperator2D} from "./IfcCartesianTransformationOperator2D"
import {IfcDerivedProfileDef} from "./IfcDerivedProfileDef"

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