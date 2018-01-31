
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcResourceObjectSelect} from "./IfcResourceObjectSelect"
import {IfcApproval} from "./IfcApproval"
import {IfcResourceLevelRelationship} from "./IfcResourceLevelRelationship"

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