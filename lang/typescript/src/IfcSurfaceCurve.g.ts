
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcCurve} from "./IfcCurve.g"
import {IfcPcurve} from "./IfcPcurve.g"
import {IfcPreferredSurfaceCurveRepresentation} from "./IfcPreferredSurfaceCurveRepresentation.g"
import {IfcSurface} from "./IfcSurface.g"
import {IfcIntersectionCurve} from "./IfcIntersectionCurve.g"
import {IfcSeamCurve} from "./IfcSeamCurve.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacecurve.htm
export class IfcSurfaceCurve extends IfcCurve {
	Curve3D : IfcCurve
	AssociatedGeometry : Array<IfcPcurve>
	MasterRepresentation : IfcPreferredSurfaceCurveRepresentation

    get BasisSurface() : Array<IfcSurface>{throw "Derived property logic has been implemented for BasisSurface."} // derived

    constructor(curve3D : IfcCurve, associatedGeometry : Array<IfcPcurve>, masterRepresentation : IfcPreferredSurfaceCurveRepresentation) {
        super()

		this.Curve3D = curve3D
		this.AssociatedGeometry = associatedGeometry
		this.MasterRepresentation = masterRepresentation

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Curve3D != null ? this.toStepValue(this.Curve3D) : "$");
		parameters.push(this.AssociatedGeometry != null ? this.toStepValue(this.AssociatedGeometry) : "$");
		parameters.push(this.MasterRepresentation != null ? this.toStepValue(this.MasterRepresentation) : "$");

        return parameters.join();
    }
}