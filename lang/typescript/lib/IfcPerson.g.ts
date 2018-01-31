
import {BaseIfc} from "./BaseIfc"
import {IfcIdentifier} from "./IfcIdentifier"
import {IfcLabel} from "./IfcLabel"
import {IfcActorRole} from "./IfcActorRole"
import {IfcAddress} from "./IfcAddress"
import {IfcPersonAndOrganization} from "./IfcPersonAndOrganization"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcperson.htm
export class IfcPerson extends BaseIfc {
	Identification : IfcIdentifier// optional
	FamilyName : IfcLabel// optional
	GivenName : IfcLabel// optional
	MiddleNames : Array<IfcLabel>// optional
	PrefixTitles : Array<IfcLabel>// optional
	SuffixTitles : Array<IfcLabel>// optional
	Roles : Array<IfcActorRole>// optional
	Addresses : Array<IfcAddress>// optional
	EngagedIn : Array<IfcPersonAndOrganization>// inverse

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
		parameters.push(this.Identification != null ? this.toStepValue(this.Identification) : "$");
		parameters.push(this.FamilyName != null ? this.toStepValue(this.FamilyName) : "$");
		parameters.push(this.GivenName != null ? this.toStepValue(this.GivenName) : "$");
		parameters.push(this.MiddleNames != null ? this.toStepValue(this.MiddleNames) : "$");
		parameters.push(this.PrefixTitles != null ? this.toStepValue(this.PrefixTitles) : "$");
		parameters.push(this.SuffixTitles != null ? this.toStepValue(this.SuffixTitles) : "$");
		parameters.push(this.Roles != null ? this.toStepValue(this.Roles) : "$");
		parameters.push(this.Addresses != null ? this.toStepValue(this.Addresses) : "$");

        return parameters.join();
    }
}