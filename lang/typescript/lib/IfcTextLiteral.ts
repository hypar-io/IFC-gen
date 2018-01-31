
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcPresentableText} from "./IfcPresentableText"
import {IfcAxis2Placement} from "./IfcAxis2Placement"
import {IfcTextPath} from "./IfcTextPath"
import {IfcTextLiteralWithExtent} from "./IfcTextLiteralWithExtent"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem"

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