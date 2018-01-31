
import {Select} from "./Select"
import {IfcDirection} from "./IfcDirection.g"
import {IfcVector} from "./IfcVector.g"

export class IfcVectorOrDirection extends Select {
    value : IfcDirection|IfcVector
}
