
import {Select} from "./Select"
import {IfcResource} from "./IfcResource.g"
import {IfcTypeResource} from "./IfcTypeResource.g"

export class IfcResourceSelect extends Select {
    value : IfcResource|IfcTypeResource
}
