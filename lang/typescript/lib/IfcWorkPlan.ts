
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
import {IfcIdentifier} from "./IfcIdentifier"
import {IfcRelAssignsToControl} from "./IfcRelAssignsToControl"
import {IfcDateTime} from "./IfcDateTime"
import {IfcPerson} from "./IfcPerson"
import {IfcDuration} from "./IfcDuration"
import {IfcWorkPlanTypeEnum} from "./IfcWorkPlanTypeEnum"
import {IfcWorkControl} from "./IfcWorkControl"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcworkplan.htm
export class IfcWorkPlan extends IfcWorkControl {
	PredefinedType : IfcWorkPlanTypeEnum// optional

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