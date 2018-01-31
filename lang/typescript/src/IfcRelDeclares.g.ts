
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcContext} from "./IfcContext.g"
import {IfcDefinitionSelect} from "./IfcDefinitionSelect.g"
import {IfcRelationship} from "./IfcRelationship.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreldeclares.htm
export class IfcRelDeclares extends IfcRelationship {
	RelatingContext : IfcContext
	RelatedDefinitions : Array<IfcDefinitionSelect>

    constructor(globalId : IfcGloballyUniqueId, relatingContext : IfcContext, relatedDefinitions : Array<IfcDefinitionSelect>) {
        super(globalId)

		this.RelatingContext = relatingContext
		this.RelatedDefinitions = relatedDefinitions

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.RelatingContext != null ? this.toStepValue(this.RelatingContext) : "$");
		parameters.push(this.RelatedDefinitions != null ? this.toStepValue(this.RelatedDefinitions) : "$");

        return parameters.join();
    }
}