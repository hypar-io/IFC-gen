
import {Select} from "./Select"
import {IfcObjectDefinition} from "./IfcObjectDefinition.g"
import {IfcPropertyDefinition} from "./IfcPropertyDefinition.g"

export class IfcDefinitionSelect extends Select {
    value : IfcObjectDefinition|IfcPropertyDefinition
}
