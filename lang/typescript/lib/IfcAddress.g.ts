
import {BaseIfc} from "./BaseIfc"
import {IfcAddressTypeEnum} from "./IfcAddressTypeEnum"
import {IfcText} from "./IfcText"
import {IfcLabel} from "./IfcLabel"
import {IfcPerson} from "./IfcPerson"
import {IfcOrganization} from "./IfcOrganization"
import {IfcPostalAddress} from "./IfcPostalAddress"
import {IfcTelecomAddress} from "./IfcTelecomAddress"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcaddress.htm
export abstract class IfcAddress extends BaseIfc {
	Purpose : IfcAddressTypeEnum// optional
	Description : IfcText// optional
	UserDefinedPurpose : IfcLabel// optional
	OfPerson : Array<IfcPerson>// inverse
	OfOrganization : Array<IfcOrganization>// inverse

    constructor() {
        super()
		this.OfPerson = new Array<IfcPerson>()
		this.OfOrganization = new Array<IfcOrganization>()

    }
}