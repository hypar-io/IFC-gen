
import {Select} from "./Select"
import {IfcArcIndex} from "./IfcArcIndex.g"
import {IfcLineIndex} from "./IfcLineIndex.g"

export class IfcSegmentIndexSelect extends Select {
    value : IfcArcIndex|IfcLineIndex
}
