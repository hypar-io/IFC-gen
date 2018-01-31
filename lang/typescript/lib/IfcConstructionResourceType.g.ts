
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
import {IfcConstructionEquipmentResourceType} from "./IfcConstructionEquipmentResourceType"
import {IfcConstructionMaterialResourceType} from "./IfcConstructionMaterialResourceType"
import {IfcConstructionProductResourceType} from "./IfcConstructionProductResourceType"
import {IfcCrewResourceType} from "./IfcCrewResourceType"
import {IfcLaborResourceType} from "./IfcLaborResourceType"
import {IfcSubContractResourceType} from "./IfcSubContractResourceType"
import {IfcTypeResource} from "./IfcTypeResource"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconstructionresourcetype.htm
export abstract class IfcConstructionResourceType extends IfcTypeResource {
	BaseCosts : Array<IfcAppliedValue>// optional
	BaseQuantity : IfcPhysicalQuantity// optional

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
		this.BaseCosts = new Array<IfcAppliedValue>()

    }
}