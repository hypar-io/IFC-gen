
import {Select} from "./Select"
import {IfcBooleanResult} from "./IfcBooleanResult"
import {IfcCsgPrimitive3D} from "./IfcCsgPrimitive3D"
import {IfcHalfSpaceSolid} from "./IfcHalfSpaceSolid"
import {IfcSolidModel} from "./IfcSolidModel"
import {IfcTessellatedFaceSet} from "./IfcTessellatedFaceSet"

export class IfcBooleanOperand extends Select {
    value : IfcBooleanResult|IfcCsgPrimitive3D|IfcHalfSpaceSolid|IfcSolidModel|IfcTessellatedFaceSet
}
