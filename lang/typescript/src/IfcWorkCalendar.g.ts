
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

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcworkcalendar.htm
 */
export class IfcWorkCalendar extends IfcControl {
	WorkingTimes : Array<IfcWorkTime> // optional
	ExceptionTimes : Array<IfcWorkTime> // optional
	PredefinedType : IfcWorkCalendarTypeEnum // optional

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.ObjectType))
		parameters.push(BaseIfc.toStepValue(this.Identification))
		parameters.push(BaseIfc.toStepValue(this.WorkingTimes))
		parameters.push(BaseIfc.toStepValue(this.ExceptionTimes))
		parameters.push(BaseIfc.toStepValue(this.PredefinedType))

        return parameters.join();
    }
}