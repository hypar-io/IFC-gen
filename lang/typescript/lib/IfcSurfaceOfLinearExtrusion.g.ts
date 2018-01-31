
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcProfileDef} from "./IfcProfileDef"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D"
import {IfcDirection} from "./IfcDirection"
import {IfcLengthMeasure} from "./IfcLengthMeasure"
import {IfcVector} from "./IfcVector"
import {IfcSweptSurface} from "./IfcSweptSurface"

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