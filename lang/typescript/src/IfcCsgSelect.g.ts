
import {Select} from "./Select"
import {IfcBooleanResult} from "./IfcBooleanResult.g"
import {IfcCsgPrimitive3D} from "./IfcCsgPrimitive3D.g"

export class IfcCsgSelect extends Select {
    value : IfcBooleanResult|IfcCsgPrimitive3D
}
