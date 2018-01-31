
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcFailureConnectionCondition} from "./IfcFailureConnectionCondition"
import {IfcSlippageConnectionCondition} from "./IfcSlippageConnectionCondition"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralconnectioncondition.htm
export abstract class IfcStructuralConnectionCondition extends BaseIfc {
	Name : IfcLabel// optional

    constructor() {
        super()

    }
}