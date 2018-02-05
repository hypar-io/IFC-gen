
import {BaseIfc} from "./BaseIfc"
import {IfcProfileTypeEnum} from "./IfcProfileTypeEnum.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcProfileProperties} from "./IfcProfileProperties.g"
import {IfcProfileDef} from "./IfcProfileDef.g"
import {IfcCartesianTransformationOperator2D} from "./IfcCartesianTransformationOperator2D.g"
import {IfcDerivedProfileDef} from "./IfcDerivedProfileDef.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmirroredprofiledef.htm
 */
export class IfcMirroredProfileDef extends IfcDerivedProfileDef {

    get Operator() : IfcCartesianTransformationOperator2D{throw "Derived property logic has not been implemented for Operator."} // derived
    set Operator(value : IfcCartesianTransformationOperator2D){super.Operator = value}

    constructor(profileType : IfcProfileTypeEnum, parentProfile : IfcProfileDef, op : IfcCartesianTransformationOperator2D) {
        super(profileType,parentProfile,op)

    }
    getStepParameters() : string {
            var parameters = new Array<string>();
    		parameters.push(BaseIfc.toStepValue(this.ProfileType))
		parameters.push(BaseIfc.toStepValue(this.ProfileName))
		parameters.push(BaseIfc.toStepValue(this.ParentProfile))
		parameters.push("*");
		parameters.push(BaseIfc.toStepValue(this.Label))

            return parameters.join();
        }
}