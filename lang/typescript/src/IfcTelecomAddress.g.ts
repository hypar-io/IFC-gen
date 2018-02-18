
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
    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Purpose))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.UserDefinedPurpose))
		parameters.push(BaseIfc.toStepValue(this.TelephoneNumbers))
		parameters.push(BaseIfc.toStepValue(this.FacsimileNumbers))
		parameters.push(BaseIfc.toStepValue(this.PagerNumber))
		parameters.push(BaseIfc.toStepValue(this.ElectronicMailAddresses))
		parameters.push(BaseIfc.toStepValue(this.WWWHomePageURL))
		parameters.push(BaseIfc.toStepValue(this.MessagingIDs))

        return parameters.join();
    }
}