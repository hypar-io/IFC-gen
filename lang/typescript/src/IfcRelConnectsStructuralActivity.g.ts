
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcStructuralActivityAssignmentSelect} from "./IfcStructuralActivityAssignmentSelect.g"
import {IfcStructuralActivity} from "./IfcStructuralActivity.g"
import {IfcRelConnects} from "./IfcRelConnects.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectsstructuralactivity.htm
export class IfcRelConnectsStructuralActivity extends IfcRelConnects {
	RelatingElement : IfcStructuralActivityAssignmentSelect
	RelatedStructuralActivity : IfcStructuralActivity

    constructor(globalId : IfcGloballyUniqueId, relatingElement : IfcStructuralActivityAssignmentSelect, relatedStructuralActivity : IfcStructuralActivity) {
        super(globalId)

		this.RelatingElement = relatingElement
		this.RelatedStructuralActivity = relatedStructuralActivity

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.RelatingElement != null ? this.toStepValue(this.RelatingElement) : "$");
		parameters.push(this.RelatedStructuralActivity != null ? this.toStepValue(this.RelatedStructuralActivity) : "$");

        return parameters.join();
    }
}