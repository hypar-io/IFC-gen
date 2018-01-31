
import {Select} from "./Select"
import {IfcAxis2Placement2D} from "./IfcAxis2Placement2D.g"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.g"

export class IfcAxis2Placement extends Select {
    value : IfcAxis2Placement2D|IfcAxis2Placement3D
}
