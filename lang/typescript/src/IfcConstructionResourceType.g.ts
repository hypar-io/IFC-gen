
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
import {IfcConstructionEquipmentResourceType} from "./IfcConstructionEquipmentResourceType.g"
import {IfcConstructionMaterialResourceType} from "./IfcConstructionMaterialResourceType.g"
import {IfcConstructionProductResourceType} from "./IfcConstructionProductResourceType.g"
import {IfcCrewResourceType} from "./IfcCrewResourceType.g"
import {IfcLaborResourceType} from "./IfcLaborResourceType.g"
import {IfcSubContractResourceType} from "./IfcSubContractResourceType.g"
import {IfcTypeResource} from "./IfcTypeResource.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconstructionresourcetype.htm
export abstract class IfcConstructionResourceType extends IfcTypeResource {
	BaseCosts : Array<IfcAppliedValue>// optional
	BaseQuantity : IfcPhysicalQuantity// optional

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
		this.BaseCosts = new Array<IfcAppliedValue>()

    }
}