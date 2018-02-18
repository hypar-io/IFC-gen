
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
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcPropertySetDefinition} from "./IfcPropertySetDefinition.g"
import {IfcRelDefinesByType} from "./IfcRelDefinesByType.g"
import {IfcRelAssignsToProcess} from "./IfcRelAssignsToProcess.g"
import {IfcEventTypeEnum} from "./IfcEventTypeEnum.g"
import {IfcEventTriggerTypeEnum} from "./IfcEventTriggerTypeEnum.g"
import {IfcTypeProcess} from "./IfcTypeProcess.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifceventtype.htm
 */
export class IfcEventType extends IfcTypeProcess {
	PredefinedType : IfcEventTypeEnum
	EventTriggerType : IfcEventTriggerTypeEnum
	UserDefinedEventTriggerType : IfcLabel // optional

    constructor(globalId : IfcGloballyUniqueId, predefinedType : IfcEventTypeEnum, eventTriggerType : IfcEventTriggerTypeEnum) {
        super(globalId)

		this.PredefinedType = predefinedType
		this.EventTriggerType = eventTriggerType

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.ApplicableOccurrence))
		parameters.push(BaseIfc.toStepValue(this.HasPropertySets))
		parameters.push(BaseIfc.toStepValue(this.Identification))
		parameters.push(BaseIfc.toStepValue(this.LongDescription))
		parameters.push(BaseIfc.toStepValue(this.ProcessType))
		parameters.push(BaseIfc.toStepValue(this.PredefinedType))
		parameters.push(BaseIfc.toStepValue(this.EventTriggerType))
		parameters.push(BaseIfc.toStepValue(this.UserDefinedEventTriggerType))

        return parameters.join();
    }
}