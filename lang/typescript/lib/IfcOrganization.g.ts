
import {BaseIfc} from "./BaseIfc"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcActorRole} from "./IfcActorRole.g"
import {IfcAddress} from "./IfcAddress.g"
import {IfcOrganizationRelationship} from "./IfcOrganizationRelationship.g"
import {IfcPersonAndOrganization} from "./IfcPersonAndOrganization.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcorganization.htm
export class IfcOrganization extends BaseIfc {
	Identification : IfcIdentifier// optional
	Name : IfcLabel
	Description : IfcText// optional
	Roles : Array<IfcActorRole>// optional
	Addresses : Array<IfcAddress>// optional
	IsRelatedBy : Array<IfcOrganizationRelationship>// inverse
	Relates : Array<IfcOrganizationRelationship>// inverse
	Engages : Array<IfcPersonAndOrganization>// inverse

    constructor(name : IfcLabel) {
        super()
		this.Roles = new Array<IfcActorRole>()
		this.Addresses = new Array<IfcAddress>()
		this.IsRelatedBy = new Array<IfcOrganizationRelationship>()
		this.Relates = new Array<IfcOrganizationRelationship>()
		this.Engages = new Array<IfcPersonAndOrganization>()

		this.Name = name

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Identification != null ? this.toStepValue(this.Identification) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.Roles != null ? this.toStepValue(this.Roles) : "$");
		parameters.push(this.Addresses != null ? this.toStepValue(this.Addresses) : "$");

        return parameters.join();
    }
}