
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcProfileDef} from "./IfcProfileDef"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D"
import {IfcAxis1Placement} from "./IfcAxis1Placement"
import {IfcPlaneAngleMeasure} from "./IfcPlaneAngleMeasure"
import {IfcLine} from "./IfcLine"
import {IfcRevolvedAreaSolid} from "./IfcRevolvedAreaSolid"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrevolvedareasolidtapered.htm
export class IfcRevolvedAreaSolidTapered extends IfcRevolvedAreaSolid {
	EndSweptArea : IfcProfileDef

    constructor(sweptArea : IfcProfileDef, axis : IfcAxis1Placement, angle : IfcPlaneAngleMeasure, endSweptArea : IfcProfileDef) {
        super(sweptArea,axis,angle)

		this.EndSweptArea = endSweptArea

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.SweptArea != null ? this.toStepValue(this.SweptArea) : "$");
		parameters.push(this.Position != null ? this.toStepValue(this.Position) : "$");
		parameters.push(this.Axis != null ? this.toStepValue(this.Axis) : "$");
		parameters.push(this.Angle != null ? this.toStepValue(this.Angle) : "$");
		parameters.push(this.EndSweptArea != null ? this.toStepValue(this.EndSweptArea) : "$");

        return parameters.join();
    }
}