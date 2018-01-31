
import {Select} from "./Select"
import {IfcBooleanResult} from "./IfcBooleanResult.g"
import {IfcCsgPrimitive3D} from "./IfcCsgPrimitive3D.g"
import {IfcHalfSpaceSolid} from "./IfcHalfSpaceSolid.g"
import {IfcSolidModel} from "./IfcSolidModel.g"
import {IfcTessellatedFaceSet} from "./IfcTessellatedFaceSet.g"

export class IfcBooleanOperand extends Select {
    value : IfcBooleanResult|IfcCsgPrimitive3D|IfcHalfSpaceSolid|IfcSolidModel|IfcTessellatedFaceSet
}
