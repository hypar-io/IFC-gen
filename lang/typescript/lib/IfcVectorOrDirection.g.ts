
import {Select} from "./Select"
import {IfcDirection} from "./IfcDirection"
import {IfcVector} from "./IfcVector"

export class IfcVectorOrDirection extends Select {
    value : IfcDirection|IfcVector
}
