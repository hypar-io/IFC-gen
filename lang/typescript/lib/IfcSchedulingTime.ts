
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcDataOriginEnum} from "./IfcDataOriginEnum"
import {IfcEventTime} from "./IfcEventTime"
import {IfcLagTime} from "./IfcLagTime"
import {IfcResourceTime} from "./IfcResourceTime"
import {IfcTaskTime} from "./IfcTaskTime"
import {IfcWorkTime} from "./IfcWorkTime"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcschedulingtime.htm
export abstract class IfcSchedulingTime extends BaseIfc {
	Name : IfcLabel// optional
	DataOrigin : IfcDataOriginEnum// optional
	UserDefinedDataOrigin : IfcLabel// optional

    constructor() {
        super()

    }
}