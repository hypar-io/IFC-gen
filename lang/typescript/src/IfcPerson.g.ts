
import {BaseIfc} from "./BaseIfc"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcActorRole} from "./IfcActorRole.g"
import {IfcAddress} from "./IfcAddress.g"
import {IfcPersonAndOrganization} from "./IfcPersonAndOrganization.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcperson.htm
 */
export class IfcPerson extends BaseIfc {
	Identification : IfcIdentifier // optional
	FamilyName : IfcLabel // optional
	GivenName : IfcLabel // optional
	MiddleNames : Array<IfcLabel> // optional
	PrefixTitles : Array<IfcLabel> // optional
	SuffixTitles : Array<IfcLabel> // optional
	Roles : Array<IfcActorRole> // optional
	Addresses : Array<IfcAddress> // optional
	EngagedIn : Array<IfcPersonAndOrganization> // inverse

    constructor() {
        super()
		this.MiddleNames = new Array<IfcLabel>()
		this.PrefixTitles = new Array<IfcLabel>()
		this.SuffixTitles = new Array<IfcLabel>()
		this.Roles = new Array<IfcActorRole>()
		this.Addresses = new Array<IfcAddress>()
		this.EngagedIn = new Array<IfcPersonAndOrganization>()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Identification != null ? BaseIfc.toStepValue(this.Identification) : "$");
		parameters.push(this.FamilyName != null ? BaseIfc.toStepValue(this.FamilyName) : "$");
		parameters.push(this.GivenName != null ? BaseIfc.toStepValue(this.GivenName) : "$");
		parameters.push(this.MiddleNames != null ? BaseIfc.toStepValue(this.MiddleNames) : "$");
		parameters.push(this.PrefixTitles != null ? BaseIfc.toStepValue(this.PrefixTitles) : "$");
		parameters.push(this.SuffixTitles != null ? BaseIfc.toStepValue(this.SuffixTitles) : "$");
		parameters.push(this.Roles != null ? BaseIfc.toStepValue(this.Roles) : "$");
		parameters.push(this.Addresses != null ? BaseIfc.toStepValue(this.Addresses) : "$");

        return parameters.join();
    }
}