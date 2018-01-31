
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcCurveStyle} from "./IfcCurveStyle.g"
import {IfcFillAreaStyle} from "./IfcFillAreaStyle.g"
import {IfcSurfaceStyle} from "./IfcSurfaceStyle.g"
import {IfcTextStyle} from "./IfcTextStyle.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpresentationstyle.htm
export abstract class IfcPresentationStyle extends BaseIfc {
	Name : IfcLabel// optional

    constructor() {
        super()

    }
}