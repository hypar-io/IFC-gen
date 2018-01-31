
import {BaseIfc} from "./BaseIfc"
import {IfcAddressTypeEnum} from "./IfcAddressTypeEnum"
import {IfcText} from "./IfcText"
import {IfcLabel} from "./IfcLabel"
import {IfcPerson} from "./IfcPerson"
import {IfcOrganization} from "./IfcOrganization"
import {IfcURIReference} from "./IfcURIReference"
import {IfcAddress} from "./IfcAddress"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctelecomaddress.htm
export class IfcTelecomAddress extends IfcAddress {
	TelephoneNumbers : Array<IfcLabel>// optional
	FacsimileNumbers : Array<IfcLabel>// optional
	PagerNumber : IfcLabel// optional
	ElectronicMailAddresses : Array<IfcLabel>// optional
	WWWHomePageURL : IfcURIReference// optional
	MessagingIDs : Array<IfcURIReference>// optional

    constructor() {
        super()
		this.TelephoneNumbers = new Array<IfcLabel>()
		this.FacsimileNumbers = new Array<IfcLabel>()
		this.ElectronicMailAddresses = new Array<IfcLabel>()
		this.MessagingIDs = new Array<IfcURIReference>()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.toStepValue(this.Purpose));
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.UserDefinedPurpose != null ? this.toStepValue(this.UserDefinedPurpose) : "$");
		parameters.push(this.TelephoneNumbers != null ? this.toStepValue(this.TelephoneNumbers) : "$");
		parameters.push(this.FacsimileNumbers != null ? this.toStepValue(this.FacsimileNumbers) : "$");
		parameters.push(this.PagerNumber != null ? this.toStepValue(this.PagerNumber) : "$");
		parameters.push(this.ElectronicMailAddresses != null ? this.toStepValue(this.ElectronicMailAddresses) : "$");
		parameters.push(this.WWWHomePageURL != null ? this.toStepValue(this.WWWHomePageURL) : "$");
		parameters.push(this.MessagingIDs != null ? this.toStepValue(this.MessagingIDs) : "$");

        return parameters.join();
    }
}