
import {Select} from "./Select"
import {IfcClassification} from "./IfcClassification"
import {IfcClassificationReference} from "./IfcClassificationReference"

export class IfcClassificationSelect extends Select {
    value : IfcClassification|IfcClassificationReference
}
