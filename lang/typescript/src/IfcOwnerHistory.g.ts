
import {BaseIfc} from "./BaseIfc"
import {IfcPersonAndOrganization} from "./IfcPersonAndOrganization.g"
import {IfcApplication} from "./IfcApplication.g"
import {IfcStateEnum} from "./IfcStateEnum.g"
import {IfcChangeActionEnum} from "./IfcChangeActionEnum.g"
import {IfcTimeStamp} from "./IfcTimeStamp.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcownerhistory.htm
 */
export class IfcOwnerHistory extends BaseIfc {
	OwningUser : IfcPersonAndOrganization
	OwningApplication : IfcApplication
	State : IfcStateEnum // optional
	ChangeAction : IfcChangeActionEnum // optional
	LastModifiedDate : IfcTimeStamp // optional
	LastModifyingUser : IfcPersonAndOrganization // optional
	LastModifyingApplication : IfcApplication // optional
	CreationDate : IfcTimeStamp

    constructor(owningUser : IfcPersonAndOrganization, owningApplication : IfcApplication, creationDate : IfcTimeStamp) {
        super()

		this.OwningUser = owningUser
		this.OwningApplication = owningApplication
		this.CreationDate = creationDate

    }
    getStepParameters() : string {
            var parameters = new Array<string>();
    		parameters.push(BaseIfc.toStepValue(this.OwningUser))
		parameters.push(BaseIfc.toStepValue(this.OwningApplication))
		parameters.push(BaseIfc.toStepValue(this.State))
		parameters.push(BaseIfc.toStepValue(this.ChangeAction))
		parameters.push(BaseIfc.toStepValue(this.LastModifiedDate))
		parameters.push(BaseIfc.toStepValue(this.LastModifyingUser))
		parameters.push(BaseIfc.toStepValue(this.LastModifyingApplication))
		parameters.push(BaseIfc.toStepValue(this.CreationDate))

            return parameters.join();
        }
}