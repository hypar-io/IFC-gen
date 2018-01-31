
import {Select} from "./Select"
import {IfcCurveStyle} from "./IfcCurveStyle"
import {IfcFillAreaStyle} from "./IfcFillAreaStyle"
import {IfcNullStyle} from "./IfcNullStyle"
import {IfcSurfaceStyle} from "./IfcSurfaceStyle"
import {IfcTextStyle} from "./IfcTextStyle"

export class IfcPresentationStyleSelect extends Select {
    value : IfcCurveStyle|IfcFillAreaStyle|IfcNullStyle|IfcSurfaceStyle|IfcTextStyle
}
