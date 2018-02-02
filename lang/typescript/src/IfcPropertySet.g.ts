
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcRelDeclares} from "./IfcRelDeclares.g"
import {IfcRelAssociates} from "./IfcRelAssociates.g"
import {IfcTypeObject} from "./IfcTypeObject.g"
import {IfcRelDefinesByTemplate} from "./IfcRelDefinesByTemplate.g"
import {IfcRelDefinesByProperties} from "./IfcRelDefinesByProperties.g"
import {IfcProperty} from "./IfcProperty.g"
import {IfcPropertySetDefinition} from "./IfcPropertySetDefinition.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertyset.htm
 */
export class IfcPropertySet extends IfcPropertySetDefinition {
	HasProperties : Array<IfcProperty>

    constructor(globalId : IfcGloballyUniqueId, hasProperties : Array<IfcProperty>) {
        super(globalId)

		this.HasProperties = hasProperties

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? BaseIfc.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? BaseIfc.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.HasProperties != null ? BaseIfc.toStepValue(this.HasProperties) : "$");

        return parameters.join();
    }
}