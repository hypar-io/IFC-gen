
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcApproval} from "./IfcApproval"
import {IfcResourceLevelRelationship} from "./IfcResourceLevelRelationship"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcapprovalrelationship.htm
export class IfcApprovalRelationship extends IfcResourceLevelRelationship {
	RelatingApproval : IfcApproval
	RelatedApprovals : Array<IfcApproval>

    constructor(relatingApproval : IfcApproval, relatedApprovals : Array<IfcApproval>) {
        super()

		this.RelatingApproval = relatingApproval
		this.RelatedApprovals = relatedApprovals

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.RelatingApproval != null ? this.toStepValue(this.RelatingApproval) : "$");
		parameters.push(this.RelatedApprovals != null ? this.toStepValue(this.RelatedApprovals) : "$");

        return parameters.join();
    }
}