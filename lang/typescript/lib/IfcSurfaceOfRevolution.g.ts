
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcProfileDef} from "./IfcProfileDef.g"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.g"
import {IfcAxis1Placement} from "./IfcAxis1Placement.g"
import {IfcLine} from "./IfcLine.g"
import {IfcSweptSurface} from "./IfcSweptSurface.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfaceofrevolution.htm
export class IfcSurfaceOfRevolution extends IfcSweptSurface {
	AxisPosition : IfcAxis1Placement

    get AxisLine() : IfcLine{throw "Derived property logic has been implemented for AxisLine."} // derived

    constructor(sweptCurve : IfcProfileDef, axisPosition : IfcAxis1Placement) {
        super(sweptCurve)

		this.AxisPosition = axisPosition

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.SweptCurve != null ? this.toStepValue(this.SweptCurve) : "$");
		parameters.push(this.Position != null ? this.toStepValue(this.Position) : "$");
		parameters.push(this.AxisPosition != null ? this.toStepValue(this.AxisPosition) : "$");

        return parameters.join();
    }
}