
import {Select} from "./Select"
import {IfcCartesianPoint} from "./IfcCartesianPoint.g"
import {IfcParameterValue} from "./IfcParameterValue.g"

export class IfcTrimmingSelect extends Select {
    value : IfcCartesianPoint|IfcParameterValue
}
