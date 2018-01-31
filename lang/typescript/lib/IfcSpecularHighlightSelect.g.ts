
import {Select} from "./Select"
import {IfcSpecularExponent} from "./IfcSpecularExponent"
import {IfcSpecularRoughness} from "./IfcSpecularRoughness"

export class IfcSpecularHighlightSelect extends Select {
    value : IfcSpecularExponent|IfcSpecularRoughness
}
