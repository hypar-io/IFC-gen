
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
import {IfcStructuralLoad} from "./IfcStructuralLoad"
import {IfcGlobalOrLocalEnum} from "./IfcGlobalOrLocalEnum"
import {IfcRelConnectsStructuralActivity} from "./IfcRelConnectsStructuralActivity"
import {IfcStructuralAction} from "./IfcStructuralAction"
import {IfcStructuralReaction} from "./IfcStructuralReaction"
import {IfcProduct} from "./IfcProduct"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralactivity.htm
export abstract class IfcStructuralActivity extends IfcProduct {
	AppliedLoad : IfcStructuralLoad
	GlobalOrLocal : IfcGlobalOrLocalEnum
	AssignedToStructuralItem : Array<IfcRelConnectsStructuralActivity>// inverse

    constructor(globalId : IfcGloballyUniqueId, appliedLoad : IfcStructuralLoad, globalOrLocal : IfcGlobalOrLocalEnum) {
        super(globalId)
		this.AssignedToStructuralItem = new Array<IfcRelConnectsStructuralActivity>()

		this.AppliedLoad = appliedLoad
		this.GlobalOrLocal = globalOrLocal

    }
}