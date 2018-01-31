
import {Select} from "./Select"
import {IfcBoolean} from "./IfcBoolean"
import {IfcWarpingMomentMeasure} from "./IfcWarpingMomentMeasure"

export class IfcWarpingStiffnessSelect extends Select {
    value : IfcBoolean|IfcWarpingMomentMeasure
}
