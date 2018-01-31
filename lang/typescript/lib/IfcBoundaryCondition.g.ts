
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcBoundaryEdgeCondition} from "./IfcBoundaryEdgeCondition.g"
import {IfcBoundaryFaceCondition} from "./IfcBoundaryFaceCondition.g"
import {IfcBoundaryNodeCondition} from "./IfcBoundaryNodeCondition.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundarycondition.htm
export abstract class IfcBoundaryCondition extends BaseIfc {
	Name : IfcLabel// optional

    constructor() {
        super()

    }
}