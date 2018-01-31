
import {Select} from "./Select"
import {IfcClassification} from "./IfcClassification.g"
import {IfcClassificationReference} from "./IfcClassificationReference.g"

export class IfcClassificationSelect extends Select {
    value : IfcClassification|IfcClassificationReference
}
