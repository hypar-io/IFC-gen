
import {BaseIfc} from "./BaseIfc"
import {IfcPersonAndOrganization} from "./IfcPersonAndOrganization.g"
import {IfcApplication} from "./IfcApplication.g"
import {IfcStateEnum} from "./IfcStateEnum.g"
import {IfcChangeActionEnum} from "./IfcChangeActionEnum.g"
import {IfcTimeStamp} from "./IfcTimeStamp.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcownerhistory.htm
export class IfcOwnerHistory extends BaseIfc {
	OwningUser : IfcPersonAndOrganization
	OwningApplication : IfcApplication
	State : IfcStateEnum// optional
	ChangeAction : IfcChangeActionEnum// optional
	LastModifiedDate : IfcTimeStamp// optional
	LastModifyingUser : IfcPersonAndOrganization// optional
	LastModifyingApplication : IfcApplication// optional
	CreationDate : IfcTimeStamp

    constructor(owningUser : IfcPersonAndOrganization, owningApplication : IfcApplication, creationDate : IfcTimeStamp) {
        super()

		this.OwningUser = owningUser
		this.OwningApplication = owningApplication
		this.CreationDate = creationDate

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.OwningUser != null ? this.toStepValue(this.OwningUser) : "$");
		parameters.push(this.OwningApplication != null ? this.toStepValue(this.OwningApplication) : "$");
		parameters.push(this.toStepValue(this.State));
		parameters.push(this.toStepValue(this.ChangeAction));
		parameters.push(this.LastModifiedDate != null ? this.toStepValue(this.LastModifiedDate) : "$");
		parameters.push(this.LastModifyingUser != null ? this.toStepValue(this.LastModifyingUser) : "$");
		parameters.push(this.LastModifyingApplication != null ? this.toStepValue(this.LastModifyingApplication) : "$");
		parameters.push(this.CreationDate != null ? this.toStepValue(this.CreationDate) : "$");

        return parameters.join();
    }
}