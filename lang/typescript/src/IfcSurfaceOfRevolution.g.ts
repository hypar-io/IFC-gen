
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcProfileDef} from "./IfcProfileDef.g"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.g"
import {IfcAxis1Placement} from "./IfcAxis1Placement.g"
import {IfcLine} from "./IfcLine.g"
import {IfcSweptSurface} from "./IfcSweptSurface.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfaceofrevolution.htm
 */
export class IfcSurfaceOfRevolution extends IfcSweptSurface {
	AxisPosition : IfcAxis1Placement

    get AxisLine() : IfcLine{throw "Derived property logic has not been implemented for AxisLine."} // derived
    set AxisLine(value : IfcLine){super.AxisLine = value}

    constructor(sweptCurve : IfcProfileDef, axisPosition : IfcAxis1Placement) {
        super(sweptCurve)

		this.AxisPosition = axisPosition

    }
    getStepParameters() : string {
            var parameters = new Array<string>();
    		parameters.push(BaseIfc.toStepValue(this.SweptCurve))
		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.AxisPosition))

            return parameters.join();
        }
}