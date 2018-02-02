
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcCurve} from "./IfcCurve.g"
import {IfcPcurve} from "./IfcPcurve.g"
import {IfcPreferredSurfaceCurveRepresentation} from "./IfcPreferredSurfaceCurveRepresentation.g"
import {IfcSurface} from "./IfcSurface.g"
import {IfcSurfaceCurve} from "./IfcSurfaceCurve.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcseamcurve.htm
 */
export class IfcSeamCurve extends IfcSurfaceCurve {

    constructor(curve3D : IfcCurve, associatedGeometry : Array<IfcPcurve>, masterRepresentation : IfcPreferredSurfaceCurveRepresentation) {
        super(curve3D,associatedGeometry,masterRepresentation)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Curve3D != null ? BaseIfc.toStepValue(this.Curve3D) : "$");
		parameters.push(this.AssociatedGeometry != null ? BaseIfc.toStepValue(this.AssociatedGeometry) : "$");
		parameters.push(this.MasterRepresentation != null ? BaseIfc.toStepValue(this.MasterRepresentation) : "$");

        return parameters.join();
    }
}