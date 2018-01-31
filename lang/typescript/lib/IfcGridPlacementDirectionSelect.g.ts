
import {Select} from "./Select"
import {IfcDirection} from "./IfcDirection.g"
import {IfcVirtualGridIntersection} from "./IfcVirtualGridIntersection.g"

export class IfcGridPlacementDirectionSelect extends Select {
    value : IfcDirection|IfcVirtualGridIntersection
}
