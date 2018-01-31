
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcSurface} from "./IfcSurface"
import {IfcBoolean} from "./IfcBoolean"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcBoxedHalfSpace} from "./IfcBoxedHalfSpace"
import {IfcPolygonalBoundedHalfSpace} from "./IfcPolygonalBoundedHalfSpace"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifchalfspacesolid.htm
export class IfcHalfSpaceSolid extends IfcGeometricRepresentationItem {
	BaseSurface : IfcSurface
	AgreementFlag : IfcBoolean

    get Dim() : IfcDimensionCount{throw "Derived property logic has been implemented for Dim."} // derived

    constructor(baseSurface : IfcSurface, agreementFlag : IfcBoolean) {
        super()

		this.BaseSurface = baseSurface
		this.AgreementFlag = agreementFlag

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.BaseSurface != null ? this.toStepValue(this.BaseSurface) : "$");
		parameters.push(this.AgreementFlag != null ? this.toStepValue(this.AgreementFlag) : "$");

        return parameters.join();
    }
}