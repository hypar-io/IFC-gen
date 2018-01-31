
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcPropertySetDefinition} from "./IfcPropertySetDefinition.g"
import {IfcPropertySetTemplate} from "./IfcPropertySetTemplate.g"
import {IfcRelDefines} from "./IfcRelDefines.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreldefinesbytemplate.htm
export class IfcRelDefinesByTemplate extends IfcRelDefines {
	RelatedPropertySets : Array<IfcPropertySetDefinition>
	RelatingTemplate : IfcPropertySetTemplate

    constructor(globalId : IfcGloballyUniqueId, relatedPropertySets : Array<IfcPropertySetDefinition>, relatingTemplate : IfcPropertySetTemplate) {
        super(globalId)

		this.RelatedPropertySets = relatedPropertySets
		this.RelatingTemplate = relatingTemplate

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.RelatedPropertySets != null ? this.toStepValue(this.RelatedPropertySets) : "$");
		parameters.push(this.RelatingTemplate != null ? this.toStepValue(this.RelatingTemplate) : "$");

        return parameters.join();
    }
}