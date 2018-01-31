
import {BaseIfc} from "./BaseIfc"
import {IfcPerson} from "./IfcPerson"
import {IfcOrganization} from "./IfcOrganization"
import {IfcActorRole} from "./IfcActorRole"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpersonandorganization.htm
export class IfcPersonAndOrganization extends BaseIfc {
	ThePerson : IfcPerson
	TheOrganization : IfcOrganization
	Roles : Array<IfcActorRole>// optional

    constructor(thePerson : IfcPerson, theOrganization : IfcOrganization) {
        super()
		this.Roles = new Array<IfcActorRole>()

		this.ThePerson = thePerson
		this.TheOrganization = theOrganization

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.ThePerson != null ? this.toStepValue(this.ThePerson) : "$");
		parameters.push(this.TheOrganization != null ? this.toStepValue(this.TheOrganization) : "$");
		parameters.push(this.Roles != null ? this.toStepValue(this.Roles) : "$");

        return parameters.join();
    }
}