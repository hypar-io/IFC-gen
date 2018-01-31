
import {Select} from "./Select"
import {IfcPresentationStyle} from "./IfcPresentationStyle"
import {IfcPresentationStyleAssignment} from "./IfcPresentationStyleAssignment"

export class IfcStyleAssignmentSelect extends Select {
    value : IfcPresentationStyle|IfcPresentationStyleAssignment
}
