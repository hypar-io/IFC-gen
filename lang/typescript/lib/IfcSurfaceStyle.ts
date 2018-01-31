
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcSurfaceSide} from "./IfcSurfaceSide"
import {IfcSurfaceStyleElementSelect} from "./IfcSurfaceStyleElementSelect"
import {IfcPresentationStyle} from "./IfcPresentationStyle"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacestyle.htm
export class IfcSurfaceStyle extends IfcPresentationStyle {
	Side : IfcSurfaceSide
	Styles : Array<IfcSurfaceStyleElementSelect>

    constructor(side : IfcSurfaceSide, styles : Array<IfcSurfaceStyleElementSelect>) {
        super()

		this.Side = side
		this.Styles = styles

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Side != null ? this.toStepValue(this.Side) : "$");
		parameters.push(this.Styles != null ? this.toStepValue(this.Styles) : "$");

        return parameters.join();
    }
}