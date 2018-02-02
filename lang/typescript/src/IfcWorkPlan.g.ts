
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
import {IfcWorkPlanTypeEnum} from "./IfcWorkPlanTypeEnum.g"
import {IfcWorkControl} from "./IfcWorkControl.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcworkplan.htm
 */
export class IfcWorkPlan extends IfcWorkControl {
	PredefinedType : IfcWorkPlanTypeEnum // optional

    constructor(globalId : IfcGloballyUniqueId, creationDate : IfcDateTime, startTime : IfcDateTime) {
        super(globalId,creationDate,startTime)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? BaseIfc.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? BaseIfc.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.ObjectType != null ? BaseIfc.toStepValue(this.ObjectType) : "$");
		parameters.push(this.Identification != null ? BaseIfc.toStepValue(this.Identification) : "$");
		parameters.push(this.CreationDate != null ? BaseIfc.toStepValue(this.CreationDate) : "$");
		parameters.push(this.Creators != null ? BaseIfc.toStepValue(this.Creators) : "$");
		parameters.push(this.Purpose != null ? BaseIfc.toStepValue(this.Purpose) : "$");
		parameters.push(this.Duration != null ? BaseIfc.toStepValue(this.Duration) : "$");
		parameters.push(this.TotalFloat != null ? BaseIfc.toStepValue(this.TotalFloat) : "$");
		parameters.push(this.StartTime != null ? BaseIfc.toStepValue(this.StartTime) : "$");
		parameters.push(this.FinishTime != null ? BaseIfc.toStepValue(this.FinishTime) : "$");
		parameters.push(BaseIfc.toStepValue(this.PredefinedType));

        return parameters.join();
    }
}