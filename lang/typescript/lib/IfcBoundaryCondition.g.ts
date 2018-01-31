
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcBoundaryEdgeCondition} from "./IfcBoundaryEdgeCondition"
import {IfcBoundaryFaceCondition} from "./IfcBoundaryFaceCondition"
import {IfcBoundaryNodeCondition} from "./IfcBoundaryNodeCondition"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundarycondition.htm
export abstract class IfcBoundaryCondition extends BaseIfc {
	Name : IfcLabel// optional

    constructor() {
        super()

    }
}