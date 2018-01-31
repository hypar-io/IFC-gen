
import {BaseIfc} from "./BaseIfc"
import {IfcAddressTypeEnum} from "./IfcAddressTypeEnum"
import {IfcText} from "./IfcText"
import {IfcLabel} from "./IfcLabel"
import {IfcPerson} from "./IfcPerson"
import {IfcOrganization} from "./IfcOrganization"
import {IfcAddress} from "./IfcAddress"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpostaladdress.htm
export class IfcPostalAddress extends IfcAddress {
	InternalLocation : IfcLabel// optional
	AddressLines : Array<IfcLabel>// optional
	PostalBox : IfcLabel// optional
	Town : IfcLabel// optional
	Region : IfcLabel// optional
	PostalCode : IfcLabel// optional
	Country : IfcLabel// optional

    constructor() {
        super()
		this.AddressLines = new Array<IfcLabel>()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.toStepValue(this.Purpose));
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.UserDefinedPurpose != null ? this.toStepValue(this.UserDefinedPurpose) : "$");
		parameters.push(this.InternalLocation != null ? this.toStepValue(this.InternalLocation) : "$");
		parameters.push(this.AddressLines != null ? this.toStepValue(this.AddressLines) : "$");
		parameters.push(this.PostalBox != null ? this.toStepValue(this.PostalBox) : "$");
		parameters.push(this.Town != null ? this.toStepValue(this.Town) : "$");
		parameters.push(this.Region != null ? this.toStepValue(this.Region) : "$");
		parameters.push(this.PostalCode != null ? this.toStepValue(this.PostalCode) : "$");
		parameters.push(this.Country != null ? this.toStepValue(this.Country) : "$");

        return parameters.join();
    }
}