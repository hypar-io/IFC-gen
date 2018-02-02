
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcDistributionControlElement} from "./IfcDistributionControlElement.g"
import {IfcDistributionFlowElement} from "./IfcDistributionFlowElement.g"
import {IfcRelConnects} from "./IfcRelConnects.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelflowcontrolelements.htm
 */
export class IfcRelFlowControlElements extends IfcRelConnects {
	RelatedControlElements : Array<IfcDistributionControlElement>
	RelatingFlowElement : IfcDistributionFlowElement

    constructor(globalId : IfcGloballyUniqueId, relatedControlElements : Array<IfcDistributionControlElement>, relatingFlowElement : IfcDistributionFlowElement) {
        super(globalId)

		this.RelatedControlElements = relatedControlElements
		this.RelatingFlowElement = relatingFlowElement

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? BaseIfc.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? BaseIfc.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.RelatedControlElements != null ? BaseIfc.toStepValue(this.RelatedControlElements) : "$");
		parameters.push(this.RelatingFlowElement != null ? BaseIfc.toStepValue(this.RelatingFlowElement) : "$");

        return parameters.join();
    }
}