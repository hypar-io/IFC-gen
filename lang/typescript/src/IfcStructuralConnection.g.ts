
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
import {IfcObjectPlacement} from "./IfcObjectPlacement.g"
import {IfcProductRepresentation} from "./IfcProductRepresentation.g"
import {IfcRelAssignsToProduct} from "./IfcRelAssignsToProduct.g"
import {IfcRelConnectsStructuralActivity} from "./IfcRelConnectsStructuralActivity.g"
import {IfcBoundaryCondition} from "./IfcBoundaryCondition.g"
import {IfcRelConnectsStructuralMember} from "./IfcRelConnectsStructuralMember.g"
import {IfcStructuralItem} from "./IfcStructuralItem.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralconnection.htm
 */
export abstract class IfcStructuralConnection extends IfcStructuralItem {
	AppliedCondition : IfcBoundaryCondition // optional
	ConnectsStructuralMembers : Array<IfcRelConnectsStructuralMember> // inverse

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
		this.ConnectsStructuralMembers = new Array<IfcRelConnectsStructuralMember>()

    }
}