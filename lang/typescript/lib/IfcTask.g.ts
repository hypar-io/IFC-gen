
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
import {IfcRelSequence} from "./IfcRelSequence"
import {IfcRelAssignsToProcess} from "./IfcRelAssignsToProcess"
import {IfcBoolean} from "./IfcBoolean"
import {IfcInteger} from "./IfcInteger"
import {IfcTaskTime} from "./IfcTaskTime"
import {IfcTaskTypeEnum} from "./IfcTaskTypeEnum"
import {IfcProcess} from "./IfcProcess"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctask.htm
export class IfcTask extends IfcProcess {
	Status : IfcLabel// optional
	WorkMethod : IfcLabel// optional
	IsMilestone : IfcBoolean
	Priority : IfcInteger// optional
	TaskTime : IfcTaskTime// optional
	PredefinedType : IfcTaskTypeEnum// optional

    constructor(globalId : IfcGloballyUniqueId, isMilestone : IfcBoolean) {
        super(globalId)

		this.IsMilestone = isMilestone

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.ObjectType != null ? this.toStepValue(this.ObjectType) : "$");
		parameters.push(this.Identification != null ? this.toStepValue(this.Identification) : "$");
		parameters.push(this.LongDescription != null ? this.toStepValue(this.LongDescription) : "$");
		parameters.push(this.Status != null ? this.toStepValue(this.Status) : "$");
		parameters.push(this.WorkMethod != null ? this.toStepValue(this.WorkMethod) : "$");
		parameters.push(this.IsMilestone != null ? this.toStepValue(this.IsMilestone) : "$");
		parameters.push(this.Priority != null ? this.toStepValue(this.Priority) : "$");
		parameters.push(this.TaskTime != null ? this.toStepValue(this.TaskTime) : "$");
		parameters.push(this.toStepValue(this.PredefinedType));

        return parameters.join();
    }
}