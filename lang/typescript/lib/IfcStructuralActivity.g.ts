
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
import {IfcStructuralLoad} from "./IfcStructuralLoad.g"
import {IfcGlobalOrLocalEnum} from "./IfcGlobalOrLocalEnum.g"
import {IfcRelConnectsStructuralActivity} from "./IfcRelConnectsStructuralActivity.g"
import {IfcStructuralAction} from "./IfcStructuralAction.g"
import {IfcStructuralReaction} from "./IfcStructuralReaction.g"
import {IfcProduct} from "./IfcProduct.g"

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