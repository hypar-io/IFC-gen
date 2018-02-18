
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
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcInteger} from "./IfcInteger.g"
import {IfcTaskTime} from "./IfcTaskTime.g"
import {IfcTaskTypeEnum} from "./IfcTaskTypeEnum.g"
import {IfcProcess} from "./IfcProcess.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctask.htm
 */
export class IfcTask extends IfcProcess {
	Status : IfcLabel // optional
	WorkMethod : IfcLabel // optional
	IsMilestone : IfcBoolean
	Priority : IfcInteger // optional
	TaskTime : IfcTaskTime // optional
	PredefinedType : IfcTaskTypeEnum // optional

    constructor(globalId : IfcGloballyUniqueId, isMilestone : IfcBoolean) {
        super(globalId)

		this.IsMilestone = isMilestone

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.ObjectType))
		parameters.push(BaseIfc.toStepValue(this.Identification))
		parameters.push(BaseIfc.toStepValue(this.LongDescription))
		parameters.push(BaseIfc.toStepValue(this.Status))
		parameters.push(BaseIfc.toStepValue(this.WorkMethod))
		parameters.push(BaseIfc.toStepValue(this.IsMilestone))
		parameters.push(BaseIfc.toStepValue(this.Priority))
		parameters.push(BaseIfc.toStepValue(this.TaskTime))
		parameters.push(BaseIfc.toStepValue(this.PredefinedType))

        return parameters.join();
    }
}