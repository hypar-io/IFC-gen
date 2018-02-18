
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpresentationstyle.htm
 */
export abstract class IfcPresentationStyle extends BaseIfc {
	Name : IfcLabel // optional

    constructor() {
        super()
    }
}