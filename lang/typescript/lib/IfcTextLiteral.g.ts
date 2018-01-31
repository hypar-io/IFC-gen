
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcPresentableText} from "./IfcPresentableText.g"
import {IfcAxis2Placement} from "./IfcAxis2Placement.g"
import {IfcTextPath} from "./IfcTextPath.g"
import {IfcTextLiteralWithExtent} from "./IfcTextLiteralWithExtent.g"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctextliteral.htm
export class IfcTextLiteral extends IfcGeometricRepresentationItem {
	Literal : IfcPresentableText
	Placement : IfcAxis2Placement
	Path : IfcTextPath

    constructor(literal : IfcPresentableText, placement : IfcAxis2Placement, path : IfcTextPath) {
        super()

		this.Literal = literal
		this.Placement = placement
		this.Path = path

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Literal != null ? this.toStepValue(this.Literal) : "$");
		parameters.push(this.Placement != null ? this.toStepValue(this.Placement) : "$");
		parameters.push(this.Path != null ? this.toStepValue(this.Path) : "$");

        return parameters.join();
    }
}