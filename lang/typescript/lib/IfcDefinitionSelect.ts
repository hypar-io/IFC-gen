
import {Select} from "./Select"
import {IfcObjectDefinition} from "./IfcObjectDefinition"
import {IfcPropertyDefinition} from "./IfcPropertyDefinition"

export class IfcDefinitionSelect extends Select {
    value : IfcObjectDefinition|IfcPropertyDefinition
}
