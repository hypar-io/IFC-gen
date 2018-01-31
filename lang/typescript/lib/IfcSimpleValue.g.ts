
import {Select} from "./Select"
import {IfcBinary} from "./IfcBinary.g"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcDate} from "./IfcDate.g"
import {IfcDateTime} from "./IfcDateTime.g"
import {IfcDuration} from "./IfcDuration.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcInteger} from "./IfcInteger.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcLogical} from "./IfcLogical.g"
import {IfcPositiveInteger} from "./IfcPositiveInteger.g"
import {IfcReal} from "./IfcReal.g"
import {IfcText} from "./IfcText.g"
import {IfcTime} from "./IfcTime.g"
import {IfcTimeStamp} from "./IfcTimeStamp.g"

export class IfcSimpleValue extends Select {
    value : IfcBinary|IfcBoolean|IfcDate|IfcDateTime|IfcDuration|IfcIdentifier|IfcInteger|IfcLabel|IfcLogical|IfcPositiveInteger|IfcReal|IfcText|IfcTime|IfcTimeStamp
}
