
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcRelDeclares} from "./IfcRelDeclares"
import {IfcRelAssociates} from "./IfcRelAssociates"
import {IfcTypeObject} from "./IfcTypeObject"
import {IfcRelDefinesByTemplate} from "./IfcRelDefinesByTemplate"
import {IfcRelDefinesByProperties} from "./IfcRelDefinesByProperties"
import {IfcProperty} from "./IfcProperty"
import {IfcPropertySetDefinition} from "./IfcPropertySetDefinition"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertyset.htm
export class IfcPropertySet extends IfcPropertySetDefinition {
	HasProperties : Array<IfcProperty>

    constructor(globalId : IfcGloballyUniqueId, hasProperties : Array<IfcProperty>) {
        super(globalId)

		this.HasProperties = hasProperties

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.HasProperties != null ? this.toStepValue(this.HasProperties) : "$");

        return parameters.join();
    }
}