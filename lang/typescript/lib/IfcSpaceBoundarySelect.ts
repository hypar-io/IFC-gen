
import {Select} from "./Select"
import {IfcExternalSpatialElement} from "./IfcExternalSpatialElement"
import {IfcSpace} from "./IfcSpace"

export class IfcSpaceBoundarySelect extends Select {
    value : IfcExternalSpatialElement|IfcSpace
}
