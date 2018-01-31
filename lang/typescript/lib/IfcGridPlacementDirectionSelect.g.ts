
import {Select} from "./Select"
import {IfcDirection} from "./IfcDirection"
import {IfcVirtualGridIntersection} from "./IfcVirtualGridIntersection"

export class IfcGridPlacementDirectionSelect extends Select {
    value : IfcDirection|IfcVirtualGridIntersection
}
