
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
import {IfcRelDefinesByObject} from "./IfcRelDefinesByObject"
import {IfcRelDefinesByType} from "./IfcRelDefinesByType"
import {IfcRelDefinesByProperties} from "./IfcRelDefinesByProperties"
import {IfcIdentifier} from "./IfcIdentifier"
import {IfcRelAssignsToResource} from "./IfcRelAssignsToResource"
import {IfcResourceTime} from "./IfcResourceTime"
import {IfcAppliedValue} from "./IfcAppliedValue"
import {IfcPhysicalQuantity} from "./IfcPhysicalQuantity"
import {IfcConstructionEquipmentResource} from "./IfcConstructionEquipmentResource"
import {IfcConstructionMaterialResource} from "./IfcConstructionMaterialResource"
import {IfcConstructionProductResource} from "./IfcConstructionProductResource"
import {IfcCrewResource} from "./IfcCrewResource"
import {IfcLaborResource} from "./IfcLaborResource"
import {IfcSubContractResource} from "./IfcSubContractResource"
import {IfcResource} from "./IfcResource"

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