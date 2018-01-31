
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
import {IfcBoundaryCondition} from "./IfcBoundaryCondition"
import {IfcRelConnectsStructuralMember} from "./IfcRelConnectsStructuralMember"
import {IfcStructuralCurveConnection} from "./IfcStructuralCurveConnection"
import {IfcStructuralPointConnection} from "./IfcStructuralPointConnection"
import {IfcStructuralSurfaceConnection} from "./IfcStructuralSurfaceConnection"
import {IfcStructuralItem} from "./IfcStructuralItem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralconnection.htm
export abstract class IfcStructuralConnection extends IfcStructuralItem {
	AppliedCondition : IfcBoundaryCondition// optional
	ConnectsStructuralMembers : Array<IfcRelConnectsStructuralMember>// inverse

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
		this.ConnectsStructuralMembers = new Array<IfcRelConnectsStructuralMember>()

    }
}