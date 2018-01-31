
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcPresentableText} from "./IfcPresentableText"
import {IfcAxis2Placement} from "./IfcAxis2Placement"
import {IfcTextPath} from "./IfcTextPath"
import {IfcPlanarExtent} from "./IfcPlanarExtent"
import {IfcBoxAlignment} from "./IfcBoxAlignment"
import {IfcTextLiteral} from "./IfcTextLiteral"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctextliteralwithextent.htm
export class IfcTextLiteralWithExtent extends IfcTextLiteral {
	Extent : IfcPlanarExtent
	BoxAlignment : IfcBoxAlignment

    constructor(literal : IfcPresentableText, placement : IfcAxis2Placement, path : IfcTextPath, extent : IfcPlanarExtent, boxAlignment : IfcBoxAlignment) {
        super(literal,placement,path)

		this.Extent = extent
		this.BoxAlignment = boxAlignment

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Literal != null ? this.toStepValue(this.Literal) : "$");
		parameters.push(this.Placement != null ? this.toStepValue(this.Placement) : "$");
		parameters.push(this.Path != null ? this.toStepValue(this.Path) : "$");
		parameters.push(this.Extent != null ? this.toStepValue(this.Extent) : "$");
		parameters.push(this.BoxAlignment != null ? this.toStepValue(this.BoxAlignment) : "$");

        return parameters.join();
    }
}