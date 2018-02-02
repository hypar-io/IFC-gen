
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcContext} from "./IfcContext.g"
import {IfcObjectDefinition} from "./IfcObjectDefinition.g"
import {IfcPropertyDefinition} from "./IfcPropertyDefinition.g"
import {IfcRelationship} from "./IfcRelationship.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreldeclares.htm
 */
export class IfcRelDeclares extends IfcRelationship {
	RelatingContext : IfcContext
	RelatedDefinitions : Array<IfcObjectDefinition|IfcPropertyDefinition>

    constructor(globalId : IfcGloballyUniqueId, relatingContext : IfcContext, relatedDefinitions : Array<IfcObjectDefinition|IfcPropertyDefinition>) {
        super(globalId)

		this.RelatingContext = relatingContext
		this.RelatedDefinitions = relatedDefinitions

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? BaseIfc.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? BaseIfc.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.RelatingContext != null ? BaseIfc.toStepValue(this.RelatingContext) : "$");
		parameters.push(this.RelatedDefinitions != null ? BaseIfc.toStepValue(this.RelatedDefinitions) : "$");

        return parameters.join();
    }
}