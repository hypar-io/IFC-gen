
import {Select} from "./Select"
import {IfcDerivedUnit} from "./IfcDerivedUnit.g"
import {IfcMonetaryUnit} from "./IfcMonetaryUnit.g"
import {IfcNamedUnit} from "./IfcNamedUnit.g"

export class IfcUnit extends Select {
    value : IfcDerivedUnit|IfcMonetaryUnit|IfcNamedUnit
}
