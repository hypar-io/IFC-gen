
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcPresentableText} from "./IfcPresentableText.g"
import {IfcAxis2Placement2D} from "./IfcAxis2Placement2D.g"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.g"
import {IfcTextPath} from "./IfcTextPath.g"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctextliteral.htm
 */
export class IfcTextLiteral extends IfcGeometricRepresentationItem {
	Literal : IfcPresentableText
	Placement : IfcAxis2Placement2D|IfcAxis2Placement3D
	Path : IfcTextPath

    constructor(literal : IfcPresentableText, placement : IfcAxis2Placement2D|IfcAxis2Placement3D, path : IfcTextPath) {
        super()

		this.Literal = literal
		this.Placement = placement
		this.Path = path

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Literal != null ? BaseIfc.toStepValue(this.Literal) : "$");
		parameters.push(this.Placement != null ? BaseIfc.toStepValue(this.Placement) : "$");
		parameters.push(this.Path != null ? BaseIfc.toStepValue(this.Path) : "$");

        return parameters.join();
    }
}