
import {BaseIfc} from "./BaseIfc"
import {IfcAddressTypeEnum} from "./IfcAddressTypeEnum.g"
import {IfcText} from "./IfcText.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcPerson} from "./IfcPerson.g"
import {IfcOrganization} from "./IfcOrganization.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcaddress.htm
 */
export abstract class IfcAddress extends BaseIfc {
	Purpose : IfcAddressTypeEnum // optional
	Description : IfcText // optional
	UserDefinedPurpose : IfcLabel // optional
	OfPerson : Array<IfcPerson> // inverse
	OfOrganization : Array<IfcOrganization> // inverse

    constructor() {
        super()
		this.OfPerson = new Array<IfcPerson>()
		this.OfOrganization = new Array<IfcOrganization>()

    }
}