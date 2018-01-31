
import {Select} from "./Select"
import {IfcElement} from "./IfcElement.g"
import {IfcStructuralItem} from "./IfcStructuralItem.g"

export class IfcStructuralActivityAssignmentSelect extends Select {
    value : IfcElement|IfcStructuralItem
}
