
import {Select} from "./Select"
import {IfcCartesianPoint} from "./IfcCartesianPoint"
import {IfcParameterValue} from "./IfcParameterValue"

export class IfcTrimmingSelect extends Select {
    value : IfcCartesianPoint|IfcParameterValue
}
