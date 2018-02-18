
import {BaseIfc} from "./BaseIfc"
import {IfcAddressTypeEnum} from "./IfcAddressTypeEnum.g"
import {IfcText} from "./IfcText.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcPerson} from "./IfcPerson.g"
import {IfcOrganization} from "./IfcOrganization.g"
import {IfcAddress} from "./IfcAddress.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpostaladdress.htm
 */
export class IfcPostalAddress extends IfcAddress {
	InternalLocation : IfcLabel // optional
	AddressLines : Array<IfcLabel> // optional
	PostalBox : IfcLabel // optional
	Town : IfcLabel // optional
	Region : IfcLabel // optional
	PostalCode : IfcLabel // optional
	Country : IfcLabel // optional

    constructor() {
        super()
    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Purpose))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.UserDefinedPurpose))
		parameters.push(BaseIfc.toStepValue(this.InternalLocation))
		parameters.push(BaseIfc.toStepValue(this.AddressLines))
		parameters.push(BaseIfc.toStepValue(this.PostalBox))
		parameters.push(BaseIfc.toStepValue(this.Town))
		parameters.push(BaseIfc.toStepValue(this.Region))
		parameters.push(BaseIfc.toStepValue(this.PostalCode))
		parameters.push(BaseIfc.toStepValue(this.Country))

        return parameters.join();
    }
}