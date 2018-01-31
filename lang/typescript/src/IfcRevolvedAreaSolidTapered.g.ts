
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcProfileDef} from "./IfcProfileDef.g"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.g"
import {IfcAxis1Placement} from "./IfcAxis1Placement.g"
import {IfcPlaneAngleMeasure} from "./IfcPlaneAngleMeasure.g"
import {IfcLine} from "./IfcLine.g"
import {IfcRevolvedAreaSolid} from "./IfcRevolvedAreaSolid.g"

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