
import {Select} from "./Select"
import {IfcPresentationStyle} from "./IfcPresentationStyle.g"
import {IfcPresentationStyleAssignment} from "./IfcPresentationStyleAssignment.g"

export class IfcStyleAssignmentSelect extends Select {
    value : IfcPresentationStyle|IfcPresentationStyleAssignment
}
