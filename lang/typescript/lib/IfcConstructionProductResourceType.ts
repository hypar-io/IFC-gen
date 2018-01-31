
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
import {IfcRelAssignsToResource} from "./IfcRelAssignsToResource"
import {IfcAppliedValue} from "./IfcAppliedValue"
import {IfcPhysicalQuantity} from "./IfcPhysicalQuantity"
import {IfcConstructionProductResourceTypeEnum} from "./IfcConstructionProductResourceTypeEnum"
import {IfcConstructionResourceType} from "./IfcConstructionResourceType"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconstructionproductresourcetype.htm
export class IfcConstructionProductResourceType extends IfcConstructionResourceType {
	PredefinedType : IfcConstructionProductResourceTypeEnum

    constructor(globalId : IfcGloballyUniqueId, predefinedType : IfcConstructionProductResourceTypeEnum) {
        super(globalId)

		this.PredefinedType = predefinedType

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.ApplicableOccurrence != null ? this.toStepValue(this.ApplicableOccurrence) : "$");
		parameters.push(this.HasPropertySets != null ? this.toStepValue(this.HasPropertySets) : "$");
		parameters.push(this.Identification != null ? this.toStepValue(this.Identification) : "$");
		parameters.push(this.LongDescription != null ? this.toStepValue(this.LongDescription) : "$");
		parameters.push(this.ResourceType != null ? this.toStepValue(this.ResourceType) : "$");
		parameters.push(this.BaseCosts != null ? this.toStepValue(this.BaseCosts) : "$");
		parameters.push(this.BaseQuantity != null ? this.toStepValue(this.BaseQuantity) : "$");
		parameters.push(this.toStepValue(this.PredefinedType));

        return parameters.join();
    }
}