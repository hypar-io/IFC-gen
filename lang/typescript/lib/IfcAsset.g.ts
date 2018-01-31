
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
import {IfcIdentifier} from "./IfcIdentifier"
import {IfcCostValue} from "./IfcCostValue"
import {IfcActorSelect} from "./IfcActorSelect"
import {IfcPerson} from "./IfcPerson"
import {IfcDate} from "./IfcDate"
import {IfcGroup} from "./IfcGroup"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcasset.htm
export class IfcAsset extends IfcGroup {
	Identification : IfcIdentifier// optional
	OriginalValue : IfcCostValue// optional
	CurrentValue : IfcCostValue// optional
	TotalReplacementCost : IfcCostValue// optional
	Owner : IfcActorSelect// optional
	User : IfcActorSelect// optional
	ResponsiblePerson : IfcPerson// optional
	IncorporationDate : IfcDate// optional
	DepreciatedValue : IfcCostValue// optional

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.ObjectType != null ? this.toStepValue(this.ObjectType) : "$");
		parameters.push(this.Identification != null ? this.toStepValue(this.Identification) : "$");
		parameters.push(this.OriginalValue != null ? this.toStepValue(this.OriginalValue) : "$");
		parameters.push(this.CurrentValue != null ? this.toStepValue(this.CurrentValue) : "$");
		parameters.push(this.TotalReplacementCost != null ? this.toStepValue(this.TotalReplacementCost) : "$");
		parameters.push(this.Owner != null ? this.toStepValue(this.Owner) : "$");
		parameters.push(this.User != null ? this.toStepValue(this.User) : "$");
		parameters.push(this.ResponsiblePerson != null ? this.toStepValue(this.ResponsiblePerson) : "$");
		parameters.push(this.IncorporationDate != null ? this.toStepValue(this.IncorporationDate) : "$");
		parameters.push(this.DepreciatedValue != null ? this.toStepValue(this.DepreciatedValue) : "$");

        return parameters.join();
    }
}