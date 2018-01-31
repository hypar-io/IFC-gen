
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
import {IfcIdentifier} from "./IfcIdentifier"
import {IfcPropertySetDefinition} from "./IfcPropertySetDefinition"
import {IfcRelDefinesByType} from "./IfcRelDefinesByType"
import {IfcRelAssignsToProcess} from "./IfcRelAssignsToProcess"
import {IfcEventTypeEnum} from "./IfcEventTypeEnum"
import {IfcEventTriggerTypeEnum} from "./IfcEventTriggerTypeEnum"
import {IfcTypeProcess} from "./IfcTypeProcess"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifceventtype.htm
export class IfcEventType extends IfcTypeProcess {
	PredefinedType : IfcEventTypeEnum
	EventTriggerType : IfcEventTriggerTypeEnum
	UserDefinedEventTriggerType : IfcLabel// optional

    constructor(globalId : IfcGloballyUniqueId, predefinedType : IfcEventTypeEnum, eventTriggerType : IfcEventTriggerTypeEnum) {
        super(globalId)

		this.PredefinedType = predefinedType
		this.EventTriggerType = eventTriggerType

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.ApplicableOccurrence != null ? this.toStepValue(this.ApplicableOccurrence) : "$");
		parameters.push(this.HasPropertySets != null ? this.toStepValue(this.HasPropertySets) : "$");
		parameters.push(this.Identification != null ? this.toStepValue(this.Identification) : "$");
		parameters.push(this.LongDescription != null ? this.toStepValue(this.LongDescription) : "$");
		parameters.push(this.ProcessType != null ? this.toStepValue(this.ProcessType) : "$");
		parameters.push(this.toStepValue(this.PredefinedType));
		parameters.push(this.toStepValue(this.EventTriggerType));
		parameters.push(this.UserDefinedEventTriggerType != null ? this.toStepValue(this.UserDefinedEventTriggerType) : "$");

        return parameters.join();
    }
}