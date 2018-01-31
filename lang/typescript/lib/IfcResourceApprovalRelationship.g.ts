
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcResourceObjectSelect} from "./IfcResourceObjectSelect.g"
import {IfcApproval} from "./IfcApproval.g"
import {IfcResourceLevelRelationship} from "./IfcResourceLevelRelationship.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcresourceapprovalrelationship.htm
export class IfcResourceApprovalRelationship extends IfcResourceLevelRelationship {
	RelatedResourceObjects : Array<IfcResourceObjectSelect>
	RelatingApproval : IfcApproval

    constructor(relatedResourceObjects : Array<IfcResourceObjectSelect>, relatingApproval : IfcApproval) {
        super()

		this.RelatedResourceObjects = relatedResourceObjects
		this.RelatingApproval = relatingApproval

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.RelatedResourceObjects != null ? this.toStepValue(this.RelatedResourceObjects) : "$");
		parameters.push(this.RelatingApproval != null ? this.toStepValue(this.RelatingApproval) : "$");

        return parameters.join();
    }
}