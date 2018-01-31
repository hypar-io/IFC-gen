
import {Select} from "./Select"
import {IfcArcIndex} from "./IfcArcIndex"
import {IfcLineIndex} from "./IfcLineIndex"

export class IfcSegmentIndexSelect extends Select {
    value : IfcArcIndex|IfcLineIndex
}
