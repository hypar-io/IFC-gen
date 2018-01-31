
import {Select} from "./Select"
import {IfcClosedShell} from "./IfcClosedShell"
import {IfcOpenShell} from "./IfcOpenShell"

export class IfcShell extends Select {
    value : IfcClosedShell|IfcOpenShell
}
