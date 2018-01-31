
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
import {IfcEventTypeEnum} from "./IfcEventTypeEnum"
import {IfcEventTriggerTypeEnum} from "./IfcEventTriggerTypeEnum"
import {IfcEventTime} from "./IfcEventTime"
import {IfcProcess} from "./IfcProcess"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcevent.htm
export class IfcEvent extends IfcProcess {
	PredefinedType : IfcEventTypeEnum// optional
	EventTriggerType : IfcEventTriggerTypeEnum// optional
	UserDefinedEventTriggerType : IfcLabel// optional
	EventOccurenceTime : IfcEventTime// optional

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
		parameters.push(this.LongDescription != null ? this.toStepValue(this.LongDescription) : "$");
		parameters.push(this.toStepValue(this.PredefinedType));
		parameters.push(this.toStepValue(this.EventTriggerType));
		parameters.push(this.UserDefinedEventTriggerType != null ? this.toStepValue(this.UserDefinedEventTriggerType) : "$");
		parameters.push(this.EventOccurenceTime != null ? this.toStepValue(this.EventOccurenceTime) : "$");

        return parameters.join();
    }
}