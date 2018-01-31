
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
import {IfcRelSequence} from "./IfcRelSequence.g"
import {IfcRelAssignsToProcess} from "./IfcRelAssignsToProcess.g"
import {IfcEventTypeEnum} from "./IfcEventTypeEnum.g"
import {IfcEventTriggerTypeEnum} from "./IfcEventTriggerTypeEnum.g"
import {IfcEventTime} from "./IfcEventTime.g"
import {IfcProcess} from "./IfcProcess.g"

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