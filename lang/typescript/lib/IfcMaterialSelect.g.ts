
import {Select} from "./Select"
import {IfcMaterialDefinition} from "./IfcMaterialDefinition.g"
import {IfcMaterialList} from "./IfcMaterialList.g"
import {IfcMaterialUsageDefinition} from "./IfcMaterialUsageDefinition.g"

export class IfcMaterialSelect extends Select {
    value : IfcMaterialDefinition|IfcMaterialList|IfcMaterialUsageDefinition
}
