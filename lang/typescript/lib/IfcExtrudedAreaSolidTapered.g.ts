
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcProfileDef} from "./IfcProfileDef"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D"
import {IfcDirection} from "./IfcDirection"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure"
import {IfcExtrudedAreaSolid} from "./IfcExtrudedAreaSolid"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcextrudedareasolidtapered.htm
export class IfcExtrudedAreaSolidTapered extends IfcExtrudedAreaSolid {
	EndSweptArea : IfcProfileDef

    constructor(sweptArea : IfcProfileDef, extrudedDirection : IfcDirection, depth : IfcPositiveLengthMeasure, endSweptArea : IfcProfileDef) {
        super(sweptArea,extrudedDirection,depth)

		this.EndSweptArea = endSweptArea

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.SweptArea != null ? this.toStepValue(this.SweptArea) : "$");
		parameters.push(this.Position != null ? this.toStepValue(this.Position) : "$");
		parameters.push(this.ExtrudedDirection != null ? this.toStepValue(this.ExtrudedDirection) : "$");
		parameters.push(this.Depth != null ? this.toStepValue(this.Depth) : "$");
		parameters.push(this.EndSweptArea != null ? this.toStepValue(this.EndSweptArea) : "$");

        return parameters.join();
    }
}