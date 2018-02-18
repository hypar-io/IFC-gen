
import {BaseIfc} from "./BaseIfc"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcActorRole} from "./IfcActorRole.g"
import {IfcAddress} from "./IfcAddress.g"
import {IfcOrganizationRelationship} from "./IfcOrganizationRelationship.g"
import {IfcPersonAndOrganization} from "./IfcPersonAndOrganization.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcorganization.htm
 */
export class IfcOrganization extends BaseIfc {
	Identification : IfcIdentifier // optional
	Name : IfcLabel
	Description : IfcText // optional
	Roles : Array<IfcActorRole> // optional
	Addresses : Array<IfcAddress> // optional
	IsRelatedBy : Array<IfcOrganizationRelationship> // inverse
	Relates : Array<IfcOrganizationRelationship> // inverse
	Engages : Array<IfcPersonAndOrganization> // inverse

    constructor(name : IfcLabel) {
        super()
		this.Name = name

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Identification))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.Roles))
		parameters.push(BaseIfc.toStepValue(this.Addresses))

        return parameters.join();
    }
}