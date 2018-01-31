
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcRelAssigns} from "./IfcRelAssigns.g"
import {IfcRelNests} from "./IfcRelNests.g"
import {IfcRelDeclares} from "./IfcRelDeclares.g"
import {IfcRelAggregates} from "./IfcRelAggregates.g"
import {IfcRelAssociates} from "./IfcRelAssociates.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcPropertySetDefinition} from "./IfcPropertySetDefinition.g"
import {IfcRelDefinesByType} from "./IfcRelDefinesByType.g"
import {IfcTypeProcess} from "./IfcTypeProcess.g"
import {IfcTypeProduct} from "./IfcTypeProduct.g"
import {IfcTypeResource} from "./IfcTypeResource.g"
import {IfcObjectDefinition} from "./IfcObjectDefinition.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctypeobject.htm
export class IfcTypeObject extends IfcObjectDefinition {
	ApplicableOccurrence : IfcIdentifier// optional
	HasPropertySets : Array<IfcPropertySetDefinition>// optional
	Types : Array<IfcRelDefinesByType>// inverse

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
		this.HasPropertySets = new Array<IfcPropertySetDefinition>()
		this.Types = new Array<IfcRelDefinesByType>()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.ApplicableOccurrence != null ? this.toStepValue(this.ApplicableOccurrence) : "$");
		parameters.push(this.HasPropertySets != null ? this.toStepValue(this.HasPropertySets) : "$");

        return parameters.join();
    }
}