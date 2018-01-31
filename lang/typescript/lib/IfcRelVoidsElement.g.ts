
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcElement} from "./IfcElement"
import {IfcFeatureElementSubtraction} from "./IfcFeatureElementSubtraction"
import {IfcRelDecomposes} from "./IfcRelDecomposes"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelvoidselement.htm
export class IfcRelVoidsElement extends IfcRelDecomposes {
	RelatingBuildingElement : IfcElement
	RelatedOpeningElement : IfcFeatureElementSubtraction

    constructor(globalId : IfcGloballyUniqueId, relatingBuildingElement : IfcElement, relatedOpeningElement : IfcFeatureElementSubtraction) {
        super(globalId)

		this.RelatingBuildingElement = relatingBuildingElement
		this.RelatedOpeningElement = relatedOpeningElement

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.RelatingBuildingElement != null ? this.toStepValue(this.RelatingBuildingElement) : "$");
		parameters.push(this.RelatedOpeningElement != null ? this.toStepValue(this.RelatedOpeningElement) : "$");

        return parameters.join();
    }
}