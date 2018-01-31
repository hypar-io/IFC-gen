
import {Select} from "./Select"
import {IfcProductDefinitionShape} from "./IfcProductDefinitionShape.g"
import {IfcRepresentationMap} from "./IfcRepresentationMap.g"

export class IfcProductRepresentationSelect extends Select {
    value : IfcProductDefinitionShape|IfcRepresentationMap
}
