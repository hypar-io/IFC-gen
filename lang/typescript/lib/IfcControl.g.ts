
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
import {IfcActionRequest} from "./IfcActionRequest.g"
import {IfcCostItem} from "./IfcCostItem.g"
import {IfcCostSchedule} from "./IfcCostSchedule.g"
import {IfcPerformanceHistory} from "./IfcPerformanceHistory.g"
import {IfcPermit} from "./IfcPermit.g"
import {IfcProjectOrder} from "./IfcProjectOrder.g"
import {IfcWorkCalendar} from "./IfcWorkCalendar.g"
import {IfcWorkControl} from "./IfcWorkControl.g"
import {IfcObject} from "./IfcObject.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccontrol.htm
export abstract class IfcControl extends IfcObject {
	Identification : IfcIdentifier// optional
	Controls : Array<IfcRelAssignsToControl>// inverse

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
		this.Controls = new Array<IfcRelAssignsToControl>()

    }
}