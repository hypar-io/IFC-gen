
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcProfileDef} from "./IfcProfileDef"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D"
import {IfcDirection} from "./IfcDirection"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure"
import {IfcExtrudedAreaSolidTapered} from "./IfcExtrudedAreaSolidTapered"
import {IfcSweptAreaSolid} from "./IfcSweptAreaSolid"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcextrudedareasolid.htm
export class IfcExtrudedAreaSolid extends IfcSweptAreaSolid {
	ExtrudedDirection : IfcDirection
	Depth : IfcPositiveLengthMeasure

    constructor(sweptArea : IfcProfileDef, extrudedDirection : IfcDirection, depth : IfcPositiveLengthMeasure) {
        super(sweptArea)

		this.ExtrudedDirection = extrudedDirection
		this.Depth = depth

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.SweptArea != null ? this.toStepValue(this.SweptArea) : "$");
		parameters.push(this.Position != null ? this.toStepValue(this.Position) : "$");
		parameters.push(this.ExtrudedDirection != null ? this.toStepValue(this.ExtrudedDirection) : "$");
		parameters.push(this.Depth != null ? this.toStepValue(this.Depth) : "$");

        return parameters.join();
    }
}