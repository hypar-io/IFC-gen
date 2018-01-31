
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcCurve} from "./IfcCurve"
import {IfcPcurve} from "./IfcPcurve"
import {IfcPreferredSurfaceCurveRepresentation} from "./IfcPreferredSurfaceCurveRepresentation"
import {IfcSurface} from "./IfcSurface"
import {IfcIntersectionCurve} from "./IfcIntersectionCurve"
import {IfcSeamCurve} from "./IfcSeamCurve"

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