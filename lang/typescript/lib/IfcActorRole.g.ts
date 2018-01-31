
import {BaseIfc} from "./BaseIfc"
import {IfcRoleEnum} from "./IfcRoleEnum.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcactorrole.htm
export class IfcActorRole extends BaseIfc {
	Role : IfcRoleEnum
	UserDefinedRole : IfcLabel// optional
	Description : IfcText// optional
	HasExternalReference : Array<IfcExternalReferenceRelationship>// inverse

    constructor(role : IfcRoleEnum) {
        super()
		this.HasExternalReference = new Array<IfcExternalReferenceRelationship>()

		this.Role = role

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.toStepValue(this.Role));
		parameters.push(this.UserDefinedRole != null ? this.toStepValue(this.UserDefinedRole) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");

        return parameters.join();
    }
}