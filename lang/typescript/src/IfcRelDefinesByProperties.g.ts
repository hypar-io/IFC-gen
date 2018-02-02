
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcObjectDefinition} from "./IfcObjectDefinition.g"
import {IfcPropertySetDefinition} from "./IfcPropertySetDefinition.g"
import {IfcPropertySetDefinitionSet} from "./IfcPropertySetDefinitionSet.g"
import {IfcRelDefines} from "./IfcRelDefines.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreldefinesbyproperties.htm
 */
export class IfcRelDefinesByProperties extends IfcRelDefines {
	RelatedObjects : Array<IfcObjectDefinition>
	RelatingPropertyDefinition : IfcPropertySetDefinition|IfcPropertySetDefinitionSet

    constructor(globalId : IfcGloballyUniqueId, relatedObjects : Array<IfcObjectDefinition>, relatingPropertyDefinition : IfcPropertySetDefinition|IfcPropertySetDefinitionSet) {
        super(globalId)

		this.RelatedObjects = relatedObjects
		this.RelatingPropertyDefinition = relatingPropertyDefinition

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? BaseIfc.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? BaseIfc.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.RelatedObjects != null ? BaseIfc.toStepValue(this.RelatedObjects) : "$");
		parameters.push(this.RelatingPropertyDefinition != null ? BaseIfc.toStepValue(this.RelatingPropertyDefinition) : "$");

        return parameters.join();
    }
}