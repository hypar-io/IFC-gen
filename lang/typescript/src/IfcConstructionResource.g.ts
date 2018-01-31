
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
import {IfcRelDefinesByObject} from "./IfcRelDefinesByObject.g"
import {IfcRelDefinesByType} from "./IfcRelDefinesByType.g"
import {IfcRelDefinesByProperties} from "./IfcRelDefinesByProperties.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcRelAssignsToResource} from "./IfcRelAssignsToResource.g"
import {IfcResourceTime} from "./IfcResourceTime.g"
import {IfcAppliedValue} from "./IfcAppliedValue.g"
import {IfcPhysicalQuantity} from "./IfcPhysicalQuantity.g"
import {IfcConstructionEquipmentResource} from "./IfcConstructionEquipmentResource.g"
import {IfcConstructionMaterialResource} from "./IfcConstructionMaterialResource.g"
import {IfcConstructionProductResource} from "./IfcConstructionProductResource.g"
import {IfcCrewResource} from "./IfcCrewResource.g"
import {IfcLaborResource} from "./IfcLaborResource.g"
import {IfcSubContractResource} from "./IfcSubContractResource.g"
import {IfcResource} from "./IfcResource.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconstructionresource.htm
export abstract class IfcConstructionResource extends IfcResource {
	Usage : IfcResourceTime// optional
	BaseCosts : Array<IfcAppliedValue>// optional
	BaseQuantity : IfcPhysicalQuantity// optional

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
		this.BaseCosts = new Array<IfcAppliedValue>()

    }
}