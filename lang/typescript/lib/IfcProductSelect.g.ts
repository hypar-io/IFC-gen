
import {Select} from "./Select"
import {IfcProduct} from "./IfcProduct.g"
import {IfcTypeProduct} from "./IfcTypeProduct.g"

export class IfcProductSelect extends Select {
    value : IfcProduct|IfcTypeProduct
}
