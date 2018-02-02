
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
import {IfcLaborResourceTypeEnum} from "./IfcLaborResourceTypeEnum.g"
import {IfcConstructionResourceType} from "./IfcConstructionResourceType.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclaborresourcetype.htm
 */
export class IfcLaborResourceType extends IfcConstructionResourceType {
	PredefinedType : IfcLaborResourceTypeEnum

    constructor(globalId : IfcGloballyUniqueId, predefinedType : IfcLaborResourceTypeEnum) {
        super(globalId)

		this.PredefinedType = predefinedType

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? BaseIfc.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? BaseIfc.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.ApplicableOccurrence != null ? BaseIfc.toStepValue(this.ApplicableOccurrence) : "$");
		parameters.push(this.HasPropertySets != null ? BaseIfc.toStepValue(this.HasPropertySets) : "$");
		parameters.push(this.Identification != null ? BaseIfc.toStepValue(this.Identification) : "$");
		parameters.push(this.LongDescription != null ? BaseIfc.toStepValue(this.LongDescription) : "$");
		parameters.push(this.ResourceType != null ? BaseIfc.toStepValue(this.ResourceType) : "$");
		parameters.push(this.BaseCosts != null ? BaseIfc.toStepValue(this.BaseCosts) : "$");
		parameters.push(this.BaseQuantity != null ? BaseIfc.toStepValue(this.BaseQuantity) : "$");
		parameters.push(BaseIfc.toStepValue(this.PredefinedType));

        return parameters.join();
    }
}