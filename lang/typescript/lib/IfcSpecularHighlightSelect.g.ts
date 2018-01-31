
import {Select} from "./Select"
import {IfcSpecularExponent} from "./IfcSpecularExponent.g"
import {IfcSpecularRoughness} from "./IfcSpecularRoughness.g"

export class IfcSpecularHighlightSelect extends Select {
    value : IfcSpecularExponent|IfcSpecularRoughness
}
