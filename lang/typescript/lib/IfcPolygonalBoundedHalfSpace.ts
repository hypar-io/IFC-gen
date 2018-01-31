
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcSurface} from "./IfcSurface"
import {IfcBoolean} from "./IfcBoolean"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D"
import {IfcBoundedCurve} from "./IfcBoundedCurve"
import {IfcHalfSpaceSolid} from "./IfcHalfSpaceSolid"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpolygonalboundedhalfspace.htm
export class IfcPolygonalBoundedHalfSpace extends IfcHalfSpaceSolid {
	Position : IfcAxis2Placement3D
	PolygonalBoundary : IfcBoundedCurve

    constructor(baseSurface : IfcSurface, agreementFlag : IfcBoolean, position : IfcAxis2Placement3D, polygonalBoundary : IfcBoundedCurve) {
        super(baseSurface,agreementFlag)

		this.Position = position
		this.PolygonalBoundary = polygonalBoundary

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.BaseSurface != null ? this.toStepValue(this.BaseSurface) : "$");
		parameters.push(this.AgreementFlag != null ? this.toStepValue(this.AgreementFlag) : "$");
		parameters.push(this.Position != null ? this.toStepValue(this.Position) : "$");
		parameters.push(this.PolygonalBoundary != null ? this.toStepValue(this.PolygonalBoundary) : "$");

        return parameters.join();
    }
}