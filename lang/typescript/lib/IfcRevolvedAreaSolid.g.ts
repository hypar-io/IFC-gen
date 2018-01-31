
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcProfileDef} from "./IfcProfileDef"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D"
import {IfcAxis1Placement} from "./IfcAxis1Placement"
import {IfcPlaneAngleMeasure} from "./IfcPlaneAngleMeasure"
import {IfcLine} from "./IfcLine"
import {IfcRevolvedAreaSolidTapered} from "./IfcRevolvedAreaSolidTapered"
import {IfcSweptAreaSolid} from "./IfcSweptAreaSolid"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrevolvedareasolid.htm
export class IfcRevolvedAreaSolid extends IfcSweptAreaSolid {
	Axis : IfcAxis1Placement
	Angle : IfcPlaneAngleMeasure

    get AxisLine() : IfcLine{throw "Derived property logic has been implemented for AxisLine."} // derived

    constructor(sweptArea : IfcProfileDef, axis : IfcAxis1Placement, angle : IfcPlaneAngleMeasure) {
        super(sweptArea)

		this.Axis = axis
		this.Angle = angle

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.SweptArea != null ? this.toStepValue(this.SweptArea) : "$");
		parameters.push(this.Position != null ? this.toStepValue(this.Position) : "$");
		parameters.push(this.Axis != null ? this.toStepValue(this.Axis) : "$");
		parameters.push(this.Angle != null ? this.toStepValue(this.Angle) : "$");

        return parameters.join();
    }
}