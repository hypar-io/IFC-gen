
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
import {IfcActionRequest} from "./IfcActionRequest"
import {IfcCostItem} from "./IfcCostItem"
import {IfcCostSchedule} from "./IfcCostSchedule"
import {IfcPerformanceHistory} from "./IfcPerformanceHistory"
import {IfcPermit} from "./IfcPermit"
import {IfcProjectOrder} from "./IfcProjectOrder"
import {IfcWorkCalendar} from "./IfcWorkCalendar"
import {IfcWorkControl} from "./IfcWorkControl"
import {IfcObject} from "./IfcObject"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccontrol.htm
export abstract class IfcControl extends IfcObject {
	Identification : IfcIdentifier// optional
	Controls : Array<IfcRelAssignsToControl>// inverse

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
		this.Controls = new Array<IfcRelAssignsToControl>()

    }
}