
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcOpeningElement} from "./IfcOpeningElement.g"
import {IfcElement} from "./IfcElement.g"
import {IfcRelConnects} from "./IfcRelConnects.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelfillselement.htm
export class IfcRelFillsElement extends IfcRelConnects {
	RelatingOpeningElement : IfcOpeningElement
	RelatedBuildingElement : IfcElement

    constructor(globalId : IfcGloballyUniqueId, relatingOpeningElement : IfcOpeningElement, relatedBuildingElement : IfcElement) {
        super(globalId)

		this.RelatingOpeningElement = relatingOpeningElement
		this.RelatedBuildingElement = relatedBuildingElement

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.RelatingOpeningElement != null ? this.toStepValue(this.RelatingOpeningElement) : "$");
		parameters.push(this.RelatedBuildingElement != null ? this.toStepValue(this.RelatedBuildingElement) : "$");

        return parameters.join();
    }
}