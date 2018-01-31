
import {Select} from "./Select"
import {IfcClosedShell} from "./IfcClosedShell.g"
import {IfcSolidModel} from "./IfcSolidModel.g"

export class IfcSolidOrShell extends Select {
    value : IfcClosedShell|IfcSolidModel
}
