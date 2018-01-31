
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
import {IfcObjectPlacement} from "./IfcObjectPlacement"
import {IfcProductRepresentation} from "./IfcProductRepresentation"
import {IfcRelAssignsToProduct} from "./IfcRelAssignsToProduct"
import {IfcRelConnectsStructuralActivity} from "./IfcRelConnectsStructuralActivity"
import {IfcRelConnectsStructuralMember} from "./IfcRelConnectsStructuralMember"
import {IfcStructuralCurveMember} from "./IfcStructuralCurveMember"
import {IfcStructuralSurfaceMember} from "./IfcStructuralSurfaceMember"
import {IfcStructuralItem} from "./IfcStructuralItem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralmember.htm
export abstract class IfcStructuralMember extends IfcStructuralItem {
	ConnectedBy : Array<IfcRelConnectsStructuralMember>// inverse

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
		this.ConnectedBy = new Array<IfcRelConnectsStructuralMember>()

    }
}