
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
import {IfcWorkPlan} from "./IfcWorkPlan"
import {IfcWorkSchedule} from "./IfcWorkSchedule"
import {IfcControl} from "./IfcControl"

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