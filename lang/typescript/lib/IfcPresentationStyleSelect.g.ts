
import {Select} from "./Select"
import {IfcCurveStyle} from "./IfcCurveStyle.g"
import {IfcFillAreaStyle} from "./IfcFillAreaStyle.g"
import {IfcNullStyle} from "./IfcNullStyle.g"
import {IfcSurfaceStyle} from "./IfcSurfaceStyle.g"
import {IfcTextStyle} from "./IfcTextStyle.g"

export class IfcPresentationStyleSelect extends Select {
    value : IfcCurveStyle|IfcFillAreaStyle|IfcNullStyle|IfcSurfaceStyle|IfcTextStyle
}
