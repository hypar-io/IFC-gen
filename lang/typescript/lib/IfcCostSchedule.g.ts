
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
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcRelAssignsToControl} from "./IfcRelAssignsToControl.g"
import {IfcCostScheduleTypeEnum} from "./IfcCostScheduleTypeEnum.g"
import {IfcDateTime} from "./IfcDateTime.g"
import {IfcControl} from "./IfcControl.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccostschedule.htm
export class IfcCostSchedule extends IfcControl {
	PredefinedType : IfcCostScheduleTypeEnum// optional
	Status : IfcLabel// optional
	SubmittedOn : IfcDateTime// optional
	UpdateDate : IfcDateTime// optional

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
		parameters.push(this.toStepValue(this.PredefinedType));
		parameters.push(this.Status != null ? this.toStepValue(this.Status) : "$");
		parameters.push(this.SubmittedOn != null ? this.toStepValue(this.SubmittedOn) : "$");
		parameters.push(this.UpdateDate != null ? this.toStepValue(this.UpdateDate) : "$");

        return parameters.join();
    }
}