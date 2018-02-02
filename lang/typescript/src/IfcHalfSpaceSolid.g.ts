
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcSurface} from "./IfcSurface.g"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifchalfspacesolid.htm
 */
export class IfcHalfSpaceSolid extends IfcGeometricRepresentationItem {
	BaseSurface : IfcSurface
	AgreementFlag : IfcBoolean

    get Dim() : IfcDimensionCount{throw "Derived property logic has not been implemented for Dim."} // derived
    set Dim(value : IfcDimensionCount){super.Dim = value}

    constructor(baseSurface : IfcSurface, agreementFlag : IfcBoolean) {
        super()

		this.BaseSurface = baseSurface
		this.AgreementFlag = agreementFlag

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.BaseSurface != null ? BaseIfc.toStepValue(this.BaseSurface) : "$");
		parameters.push(this.AgreementFlag != null ? BaseIfc.toStepValue(this.AgreementFlag) : "$");

        return parameters.join();
    }
}