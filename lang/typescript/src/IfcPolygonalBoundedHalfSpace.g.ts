
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcSurface} from "./IfcSurface.g"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.g"
import {IfcBoundedCurve} from "./IfcBoundedCurve.g"
import {IfcHalfSpaceSolid} from "./IfcHalfSpaceSolid.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpolygonalboundedhalfspace.htm
 */
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
		parameters.push(this.BaseSurface != null ? BaseIfc.toStepValue(this.BaseSurface) : "$");
		parameters.push(this.AgreementFlag != null ? BaseIfc.toStepValue(this.AgreementFlag) : "$");
		parameters.push(this.Position != null ? BaseIfc.toStepValue(this.Position) : "$");
		parameters.push(this.PolygonalBoundary != null ? BaseIfc.toStepValue(this.PolygonalBoundary) : "$");

        return parameters.join();
    }
}