
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcElement} from "./IfcElement"
import {IfcFeatureElementAddition} from "./IfcFeatureElementAddition"
import {IfcRelDecomposes} from "./IfcRelDecomposes"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelprojectselement.htm
export class IfcRelProjectsElement extends IfcRelDecomposes {
	RelatingElement : IfcElement
	RelatedFeatureElement : IfcFeatureElementAddition

    constructor(globalId : IfcGloballyUniqueId, relatingElement : IfcElement, relatedFeatureElement : IfcFeatureElementAddition) {
        super(globalId)

		this.RelatingElement = relatingElement
		this.RelatedFeatureElement = relatedFeatureElement

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.RelatingElement != null ? this.toStepValue(this.RelatingElement) : "$");
		parameters.push(this.RelatedFeatureElement != null ? this.toStepValue(this.RelatedFeatureElement) : "$");

        return parameters.join();
    }
}