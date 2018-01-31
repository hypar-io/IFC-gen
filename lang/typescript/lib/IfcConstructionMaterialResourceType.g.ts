
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
import {IfcRelAssignsToResource} from "./IfcRelAssignsToResource.g"
import {IfcAppliedValue} from "./IfcAppliedValue.g"
import {IfcPhysicalQuantity} from "./IfcPhysicalQuantity.g"
import {IfcConstructionMaterialResourceTypeEnum} from "./IfcConstructionMaterialResourceTypeEnum.g"
import {IfcConstructionResourceType} from "./IfcConstructionResourceType.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconstructionmaterialresourcetype.htm
export class IfcConstructionMaterialResourceType extends IfcConstructionResourceType {
	PredefinedType : IfcConstructionMaterialResourceTypeEnum

    constructor(globalId : IfcGloballyUniqueId, predefinedType : IfcConstructionMaterialResourceTypeEnum) {
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