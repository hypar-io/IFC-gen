
import {Select} from "./Select"
import {IfcBinary} from "./IfcBinary"
import {IfcBoolean} from "./IfcBoolean"
import {IfcDate} from "./IfcDate"
import {IfcDateTime} from "./IfcDateTime"
import {IfcDuration} from "./IfcDuration"
import {IfcIdentifier} from "./IfcIdentifier"
import {IfcInteger} from "./IfcInteger"
import {IfcLabel} from "./IfcLabel"
import {IfcLogical} from "./IfcLogical"
import {IfcPositiveInteger} from "./IfcPositiveInteger"
import {IfcReal} from "./IfcReal"
import {IfcText} from "./IfcText"
import {IfcTime} from "./IfcTime"
import {IfcTimeStamp} from "./IfcTimeStamp"

export class IfcSimpleValue extends Select {
    value : IfcBinary|IfcBoolean|IfcDate|IfcDateTime|IfcDuration|IfcIdentifier|IfcInteger|IfcLabel|IfcLogical|IfcPositiveInteger|IfcReal|IfcText|IfcTime|IfcTimeStamp
}
