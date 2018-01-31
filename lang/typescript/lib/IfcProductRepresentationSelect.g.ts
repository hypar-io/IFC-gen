
import {Select} from "./Select"
import {IfcProductDefinitionShape} from "./IfcProductDefinitionShape"
import {IfcRepresentationMap} from "./IfcRepresentationMap"

export class IfcProductRepresentationSelect extends Select {
    value : IfcProductDefinitionShape|IfcRepresentationMap
}
