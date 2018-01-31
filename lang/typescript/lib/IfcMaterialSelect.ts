
import {Select} from "./Select"
import {IfcMaterialDefinition} from "./IfcMaterialDefinition"
import {IfcMaterialList} from "./IfcMaterialList"
import {IfcMaterialUsageDefinition} from "./IfcMaterialUsageDefinition"

export class IfcMaterialSelect extends Select {
    value : IfcMaterialDefinition|IfcMaterialList|IfcMaterialUsageDefinition
}
