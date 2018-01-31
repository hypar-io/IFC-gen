
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcProfileDef} from "./IfcProfileDef.g"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.g"
import {IfcDirection} from "./IfcDirection.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcVector} from "./IfcVector.g"
import {IfcSweptSurface} from "./IfcSweptSurface.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfaceoflinearextrusion.htm
export class IfcSurfaceOfLinearExtrusion extends IfcSweptSurface {
	ExtrudedDirection : IfcDirection
	Depth : IfcLengthMeasure

    get ExtrusionAxis() : IfcVector{throw "Derived property logic has been implemented for ExtrusionAxis."} // derived

    constructor(sweptCurve : IfcProfileDef, extrudedDirection : IfcDirection, depth : IfcLengthMeasure) {
        super(sweptCurve)

		this.ExtrudedDirection = extrudedDirection
		this.Depth = depth

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.SweptCurve != null ? this.toStepValue(this.SweptCurve) : "$");
		parameters.push(this.Position != null ? this.toStepValue(this.Position) : "$");
		parameters.push(this.ExtrudedDirection != null ? this.toStepValue(this.ExtrudedDirection) : "$");
		parameters.push(this.Depth != null ? this.toStepValue(this.Depth) : "$");

        return parameters.join();
    }
}