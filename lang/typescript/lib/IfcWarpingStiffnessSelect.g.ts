
import {Select} from "./Select"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcWarpingMomentMeasure} from "./IfcWarpingMomentMeasure.g"

export class IfcWarpingStiffnessSelect extends Select {
    value : IfcBoolean|IfcWarpingMomentMeasure
}
