
import {Select} from "./Select"
import {IfcClosedShell} from "./IfcClosedShell.g"
import {IfcOpenShell} from "./IfcOpenShell.g"

export class IfcShell extends Select {
    value : IfcClosedShell|IfcOpenShell
}
