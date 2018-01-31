
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
import {IfcStructuralConnection} from "./IfcStructuralConnection"
import {IfcStructuralMember} from "./IfcStructuralMember"
import {IfcProduct} from "./IfcProduct"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralitem.htm
export abstract class IfcStructuralItem extends IfcProduct {
	AssignedStructuralActivity : Array<IfcRelConnectsStructuralActivity>// inverse

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
		this.AssignedStructuralActivity = new Array<IfcRelConnectsStructuralActivity>()

    }
}