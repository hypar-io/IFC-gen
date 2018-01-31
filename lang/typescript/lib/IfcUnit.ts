
import {Select} from "./Select"
import {IfcDerivedUnit} from "./IfcDerivedUnit"
import {IfcMonetaryUnit} from "./IfcMonetaryUnit"
import {IfcNamedUnit} from "./IfcNamedUnit"

export class IfcUnit extends Select {
    value : IfcDerivedUnit|IfcMonetaryUnit|IfcNamedUnit
}
