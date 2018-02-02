
import {BaseIfc} from "./BaseIfc"
import {IfcAddressTypeEnum} from "./IfcAddressTypeEnum.g"
import {IfcText} from "./IfcText.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcPerson} from "./IfcPerson.g"
import {IfcOrganization} from "./IfcOrganization.g"
import {IfcURIReference} from "./IfcURIReference.g"
import {IfcAddress} from "./IfcAddress.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctelecomaddress.htm
 */
export class IfcTelecomAddress extends IfcAddress {
	TelephoneNumbers : Array<IfcLabel> // optional
	FacsimileNumbers : Array<IfcLabel> // optional
	PagerNumber : IfcLabel // optional
	ElectronicMailAddresses : Array<IfcLabel> // optional
	WWWHomePageURL : IfcURIReference // optional
	MessagingIDs : Array<IfcURIReference> // optional

    constructor() {
        super()
		this.TelephoneNumbers = new Array<IfcLabel>()
		this.FacsimileNumbers = new Array<IfcLabel>()
		this.ElectronicMailAddresses = new Array<IfcLabel>()
		this.MessagingIDs = new Array<IfcURIReference>()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Purpose));
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.UserDefinedPurpose != null ? BaseIfc.toStepValue(this.UserDefinedPurpose) : "$");
		parameters.push(this.TelephoneNumbers != null ? BaseIfc.toStepValue(this.TelephoneNumbers) : "$");
		parameters.push(this.FacsimileNumbers != null ? BaseIfc.toStepValue(this.FacsimileNumbers) : "$");
		parameters.push(this.PagerNumber != null ? BaseIfc.toStepValue(this.PagerNumber) : "$");
		parameters.push(this.ElectronicMailAddresses != null ? BaseIfc.toStepValue(this.ElectronicMailAddresses) : "$");
		parameters.push(this.WWWHomePageURL != null ? BaseIfc.toStepValue(this.WWWHomePageURL) : "$");
		parameters.push(this.MessagingIDs != null ? BaseIfc.toStepValue(this.MessagingIDs) : "$");

        return parameters.join();
    }
}