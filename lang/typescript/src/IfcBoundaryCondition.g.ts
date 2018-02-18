
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundarycondition.htm
 */
export abstract class IfcBoundaryCondition extends BaseIfc {
	Name : IfcLabel // optional

    constructor() {
        super()
    }
}