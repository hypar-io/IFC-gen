
import {BaseIfc} from "./BaseIfc"
import {IfcCurveStyle} from "./IfcCurveStyle.g"
import {IfcFillAreaStyle} from "./IfcFillAreaStyle.g"
import {IfcNullStyle} from "./IfcNullStyle.g"
import {IfcSurfaceStyle} from "./IfcSurfaceStyle.g"
import {IfcTextStyle} from "./IfcTextStyle.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpresentationstyleassignment.htm
 */
export class IfcPresentationStyleAssignment extends BaseIfc {
	Styles : Array<IfcCurveStyle|IfcFillAreaStyle|IfcNullStyle|IfcSurfaceStyle|IfcTextStyle>

    constructor(styles : Array<IfcCurveStyle|IfcFillAreaStyle|IfcNullStyle|IfcSurfaceStyle|IfcTextStyle>) {
        super()

		this.Styles = styles

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Styles != null ? BaseIfc.toStepValue(this.Styles) : "$");

        return parameters.join();
    }
}