
import {Select} from "./Select"
import {IfcClosedShell} from "./IfcClosedShell"
import {IfcSolidModel} from "./IfcSolidModel"

export class IfcSolidOrShell extends Select {
    value : IfcClosedShell|IfcSolidModel
}
