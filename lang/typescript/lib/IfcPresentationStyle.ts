
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcCurveStyle} from "./IfcCurveStyle"
import {IfcFillAreaStyle} from "./IfcFillAreaStyle"
import {IfcSurfaceStyle} from "./IfcSurfaceStyle"
import {IfcTextStyle} from "./IfcTextStyle"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpresentationstyle.htm
export abstract class IfcPresentationStyle extends BaseIfc {
	Name : IfcLabel// optional

    constructor() {
        super()

    }
}