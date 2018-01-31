
import {Select} from "./Select"
import {IfcBooleanResult} from "./IfcBooleanResult"
import {IfcCsgPrimitive3D} from "./IfcCsgPrimitive3D"

export class IfcCsgSelect extends Select {
    value : IfcBooleanResult|IfcCsgPrimitive3D
}
