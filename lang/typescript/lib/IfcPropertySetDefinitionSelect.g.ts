
import {Select} from "./Select"
import {IfcPropertySetDefinition} from "./IfcPropertySetDefinition.g"
import {IfcPropertySetDefinitionSet} from "./IfcPropertySetDefinitionSet.g"

export class IfcPropertySetDefinitionSelect extends Select {
    value : IfcPropertySetDefinition|IfcPropertySetDefinitionSet
}
