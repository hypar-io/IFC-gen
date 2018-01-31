
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcPresentableText} from "./IfcPresentableText.g"
import {IfcAxis2Placement} from "./IfcAxis2Placement.g"
import {IfcTextPath} from "./IfcTextPath.g"
import {IfcPlanarExtent} from "./IfcPlanarExtent.g"
import {IfcBoxAlignment} from "./IfcBoxAlignment.g"
import {IfcTextLiteral} from "./IfcTextLiteral.g"

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