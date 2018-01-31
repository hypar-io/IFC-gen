
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcRelAssigns} from "./IfcRelAssigns"
import {IfcRelNests} from "./IfcRelNests"
import {IfcRelDeclares} from "./IfcRelDeclares"
import {IfcRelAggregates} from "./IfcRelAggregates"
import {IfcRelAssociates} from "./IfcRelAssociates"
import {IfcIdentifier} from "./IfcIdentifier"
import {IfcPropertySetDefinition} from "./IfcPropertySetDefinition"
import {IfcRelDefinesByType} from "./IfcRelDefinesByType"
import {IfcTypeProcess} from "./IfcTypeProcess"
import {IfcTypeProduct} from "./IfcTypeProduct"
import {IfcTypeResource} from "./IfcTypeResource"
import {IfcObjectDefinition} from "./IfcObjectDefinition"

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