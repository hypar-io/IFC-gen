
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
import {IfcWorkPlan} from "./IfcWorkPlan.g"
import {IfcWorkSchedule} from "./IfcWorkSchedule.g"
import {IfcControl} from "./IfcControl.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcworkcontrol.htm
export abstract class IfcWorkControl extends IfcControl {
	CreationDate : IfcDateTime
	Creators : Array<IfcPerson>// optional
	Purpose : IfcLabel// optional
	Duration : IfcDuration// optional
	TotalFloat : IfcDuration// optional
	StartTime : IfcDateTime
	FinishTime : IfcDateTime// optional

    constructor(globalId : IfcGloballyUniqueId, creationDate : IfcDateTime, startTime : IfcDateTime) {
        super(globalId)
		this.Creators = new Array<IfcPerson>()

		this.CreationDate = creationDate
		this.StartTime = startTime

    }
}