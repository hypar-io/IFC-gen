
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
import {IfcRelAssignsToGroup} from "./IfcRelAssignsToGroup.g"
import {IfcAsset} from "./IfcAsset.g"
import {IfcInventory} from "./IfcInventory.g"
import {IfcStructuralLoadGroup} from "./IfcStructuralLoadGroup.g"
import {IfcStructuralResultGroup} from "./IfcStructuralResultGroup.g"
import {IfcSystem} from "./IfcSystem.g"
import {IfcObject} from "./IfcObject.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgroup.htm
export class IfcGroup extends IfcObject {
	IsGroupedBy : Array<IfcRelAssignsToGroup>// inverse

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
		this.IsGroupedBy = new Array<IfcRelAssignsToGroup>()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.ObjectType != null ? this.toStepValue(this.ObjectType) : "$");

        return parameters.join();
    }
}