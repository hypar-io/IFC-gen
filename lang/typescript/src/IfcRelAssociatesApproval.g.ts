
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcDefinitionSelect} from "./IfcDefinitionSelect.g"
import {IfcApproval} from "./IfcApproval.g"
import {IfcRelAssociates} from "./IfcRelAssociates.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociatesapproval.htm
export class IfcRelAssociatesApproval extends IfcRelAssociates {
	RelatingApproval : IfcApproval

    constructor(globalId : IfcGloballyUniqueId, relatedObjects : Array<IfcDefinitionSelect>, relatingApproval : IfcApproval) {
        super(globalId,relatedObjects)

		this.RelatingApproval = relatingApproval

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.RelatedObjects != null ? this.toStepValue(this.RelatedObjects) : "$");
		parameters.push(this.RelatingApproval != null ? this.toStepValue(this.RelatingApproval) : "$");

        return parameters.join();
    }
}