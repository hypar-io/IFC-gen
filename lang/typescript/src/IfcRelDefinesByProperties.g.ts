
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcObjectDefinition} from "./IfcObjectDefinition.g"
import {IfcPropertySetDefinitionSelect} from "./IfcPropertySetDefinitionSelect.g"
import {IfcRelDefines} from "./IfcRelDefines.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreldefinesbyproperties.htm
export class IfcRelDefinesByProperties extends IfcRelDefines {
	RelatedObjects : Array<IfcObjectDefinition>
	RelatingPropertyDefinition : IfcPropertySetDefinitionSelect

    constructor(globalId : IfcGloballyUniqueId, relatedObjects : Array<IfcObjectDefinition>, relatingPropertyDefinition : IfcPropertySetDefinitionSelect) {
        super(globalId)

		this.RelatedObjects = relatedObjects
		this.RelatingPropertyDefinition = relatingPropertyDefinition

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.RelatedObjects != null ? this.toStepValue(this.RelatedObjects) : "$");
		parameters.push(this.RelatingPropertyDefinition != null ? this.toStepValue(this.RelatingPropertyDefinition) : "$");

        return parameters.join();
    }
}