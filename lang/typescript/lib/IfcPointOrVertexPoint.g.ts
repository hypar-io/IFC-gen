
import {Select} from "./Select"
import {IfcPoint} from "./IfcPoint"
import {IfcVertexPoint} from "./IfcVertexPoint"

export class IfcPointOrVertexPoint extends Select {
    value : IfcPoint|IfcVertexPoint
}
