
import {Select} from "./Select"
import {IfcPoint} from "./IfcPoint.g"
import {IfcVertexPoint} from "./IfcVertexPoint.g"

export class IfcPointOrVertexPoint extends Select {
    value : IfcPoint|IfcVertexPoint
}
