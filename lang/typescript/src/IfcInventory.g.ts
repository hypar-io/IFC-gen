
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
import {IfcInventoryTypeEnum} from "./IfcInventoryTypeEnum.g"
import {IfcActorSelect} from "./IfcActorSelect.g"
import {IfcPerson} from "./IfcPerson.g"
import {IfcDate} from "./IfcDate.g"
import {IfcCostValue} from "./IfcCostValue.g"
import {IfcGroup} from "./IfcGroup.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcinventory.htm
export class IfcInventory extends IfcGroup {
	PredefinedType : IfcInventoryTypeEnum// optional
	Jurisdiction : IfcActorSelect// optional
	ResponsiblePersons : Array<IfcPerson>// optional
	LastUpdateDate : IfcDate// optional
	CurrentValue : IfcCostValue// optional
	OriginalValue : IfcCostValue// optional

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
		this.ResponsiblePersons = new Array<IfcPerson>()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.ObjectType != null ? this.toStepValue(this.ObjectType) : "$");
		parameters.push(this.toStepValue(this.PredefinedType));
		parameters.push(this.Jurisdiction != null ? this.toStepValue(this.Jurisdiction) : "$");
		parameters.push(this.ResponsiblePersons != null ? this.toStepValue(this.ResponsiblePersons) : "$");
		parameters.push(this.LastUpdateDate != null ? this.toStepValue(this.LastUpdateDate) : "$");
		parameters.push(this.CurrentValue != null ? this.toStepValue(this.CurrentValue) : "$");
		parameters.push(this.OriginalValue != null ? this.toStepValue(this.OriginalValue) : "$");

        return parameters.join();
    }
}