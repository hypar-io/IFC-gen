
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcCurve} from "./IfcCurve"
import {IfcPcurve} from "./IfcPcurve"
import {IfcPreferredSurfaceCurveRepresentation} from "./IfcPreferredSurfaceCurveRepresentation"
import {IfcSurface} from "./IfcSurface"
import {IfcSurfaceCurve} from "./IfcSurfaceCurve"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcseamcurve.htm
export class IfcSeamCurve extends IfcSurfaceCurve {

    constructor(curve3D : IfcCurve, associatedGeometry : Array<IfcPcurve>, masterRepresentation : IfcPreferredSurfaceCurveRepresentation) {
        super(curve3D,associatedGeometry,masterRepresentation)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Curve3D != null ? this.toStepValue(this.Curve3D) : "$");
		parameters.push(this.AssociatedGeometry != null ? this.toStepValue(this.AssociatedGeometry) : "$");
		parameters.push(this.MasterRepresentation != null ? this.toStepValue(this.MasterRepresentation) : "$");

        return parameters.join();
    }
}