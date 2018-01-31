
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
import {IfcDateTime} from "./IfcDateTime.g"
import {IfcPerson} from "./IfcPerson.g"
import {IfcDuration} from "./IfcDuration.g"
import {IfcWorkScheduleTypeEnum} from "./IfcWorkScheduleTypeEnum.g"
import {IfcWorkControl} from "./IfcWorkControl.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcworkschedule.htm
export class IfcWorkSchedule extends IfcWorkControl {
	PredefinedType : IfcWorkScheduleTypeEnum// optional

    constructor(globalId : IfcGloballyUniqueId, creationDate : IfcDateTime, startTime : IfcDateTime) {
        super(globalId,creationDate,startTime)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.ObjectType != null ? this.toStepValue(this.ObjectType) : "$");
		parameters.push(this.Identification != null ? this.toStepValue(this.Identification) : "$");
		parameters.push(this.CreationDate != null ? this.toStepValue(this.CreationDate) : "$");
		parameters.push(this.Creators != null ? this.toStepValue(this.Creators) : "$");
		parameters.push(this.Purpose != null ? this.toStepValue(this.Purpose) : "$");
		parameters.push(this.Duration != null ? this.toStepValue(this.Duration) : "$");
		parameters.push(this.TotalFloat != null ? this.toStepValue(this.TotalFloat) : "$");
		parameters.push(this.StartTime != null ? this.toStepValue(this.StartTime) : "$");
		parameters.push(this.FinishTime != null ? this.toStepValue(this.FinishTime) : "$");
		parameters.push(this.toStepValue(this.PredefinedType));

        return parameters.join();
    }
}