
import {Select} from "./Select"
import {IfcExternalSpatialElement} from "./IfcExternalSpatialElement.g"
import {IfcSpace} from "./IfcSpace.g"

export class IfcSpaceBoundarySelect extends Select {
    value : IfcExternalSpatialElement|IfcSpace
}
