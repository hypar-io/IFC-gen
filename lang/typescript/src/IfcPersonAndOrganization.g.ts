
import {BaseIfc} from "./BaseIfc"
import {IfcPerson} from "./IfcPerson.g"
import {IfcOrganization} from "./IfcOrganization.g"
import {IfcActorRole} from "./IfcActorRole.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpersonandorganization.htm
 */
export class IfcPersonAndOrganization extends BaseIfc {
	ThePerson : IfcPerson
	TheOrganization : IfcOrganization
	Roles : Array<IfcActorRole> // optional

    constructor(thePerson : IfcPerson, theOrganization : IfcOrganization) {
        super()
		this.Roles = new Array<IfcActorRole>()

		this.ThePerson = thePerson
		this.TheOrganization = theOrganization

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.ThePerson))
		parameters.push(BaseIfc.toStepValue(this.TheOrganization))
		parameters.push(BaseIfc.toStepValue(this.Roles))

        return parameters.join();
    }
}