
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
import {IfcWorkTime} from "./IfcWorkTime.g"
import {IfcWorkCalendarTypeEnum} from "./IfcWorkCalendarTypeEnum.g"
import {IfcControl} from "./IfcControl.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcworkcalendar.htm
export class IfcWorkCalendar extends IfcControl {
	WorkingTimes : Array<IfcWorkTime>// optional
	ExceptionTimes : Array<IfcWorkTime>// optional
	PredefinedType : IfcWorkCalendarTypeEnum// optional

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
		this.WorkingTimes = new Array<IfcWorkTime>()
		this.ExceptionTimes = new Array<IfcWorkTime>()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.ObjectType != null ? this.toStepValue(this.ObjectType) : "$");
		parameters.push(this.Identification != null ? this.toStepValue(this.Identification) : "$");
		parameters.push(this.WorkingTimes != null ? this.toStepValue(this.WorkingTimes) : "$");
		parameters.push(this.ExceptionTimes != null ? this.toStepValue(this.ExceptionTimes) : "$");
		parameters.push(this.toStepValue(this.PredefinedType));

        return parameters.join();
    }
}