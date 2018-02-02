
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcProfileDef} from "./IfcProfileDef.g"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.g"
import {IfcDirection} from "./IfcDirection.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcSweptAreaSolid} from "./IfcSweptAreaSolid.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcextrudedareasolid.htm
 */
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
		parameters.push(this.SweptArea != null ? BaseIfc.toStepValue(this.SweptArea) : "$");
		parameters.push(this.Position != null ? BaseIfc.toStepValue(this.Position) : "$");
		parameters.push(this.ExtrudedDirection != null ? BaseIfc.toStepValue(this.ExtrudedDirection) : "$");
		parameters.push(this.Depth != null ? BaseIfc.toStepValue(this.Depth) : "$");

        return parameters.join();
    }
}