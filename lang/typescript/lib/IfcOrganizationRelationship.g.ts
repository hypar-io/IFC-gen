
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcOrganization} from "./IfcOrganization.g"
import {IfcResourceLevelRelationship} from "./IfcResourceLevelRelationship.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcorganizationrelationship.htm
export class IfcOrganizationRelationship extends IfcResourceLevelRelationship {
	RelatingOrganization : IfcOrganization
	RelatedOrganizations : Array<IfcOrganization>

    constructor(relatingOrganization : IfcOrganization, relatedOrganizations : Array<IfcOrganization>) {
        super()

		this.RelatingOrganization = relatingOrganization
		this.RelatedOrganizations = relatedOrganizations

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.RelatingOrganization != null ? this.toStepValue(this.RelatingOrganization) : "$");
		parameters.push(this.RelatedOrganizations != null ? this.toStepValue(this.RelatedOrganizations) : "$");

        return parameters.join();
    }
}