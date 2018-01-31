
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
import {IfcRelAssignsToGroup} from "./IfcRelAssignsToGroup"
import {IfcInventoryTypeEnum} from "./IfcInventoryTypeEnum"
import {IfcActorSelect} from "./IfcActorSelect"
import {IfcPerson} from "./IfcPerson"
import {IfcDate} from "./IfcDate"
import {IfcCostValue} from "./IfcCostValue"
import {IfcGroup} from "./IfcGroup"

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