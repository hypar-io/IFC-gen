
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcPresentableText} from "./IfcPresentableText.g"
import {IfcAxis2Placement2D} from "./IfcAxis2Placement2D.g"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.g"
import {IfcTextPath} from "./IfcTextPath.g"
import {IfcPlanarExtent} from "./IfcPlanarExtent.g"
import {IfcBoxAlignment} from "./IfcBoxAlignment.g"
import {IfcTextLiteral} from "./IfcTextLiteral.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctextliteralwithextent.htm
 */
export class IfcTextLiteralWithExtent extends IfcTextLiteral {
	Extent : IfcPlanarExtent
	BoxAlignment : IfcBoxAlignment

    constructor(literal : IfcPresentableText, placement : IfcAxis2Placement2D|IfcAxis2Placement3D, path : IfcTextPath, extent : IfcPlanarExtent, boxAlignment : IfcBoxAlignment) {
        super(literal,placement,path)

		this.Extent = extent
		this.BoxAlignment = boxAlignment

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Literal))
		parameters.push(BaseIfc.toStepValue(this.Placement))
		parameters.push(BaseIfc.toStepValue(this.Path))
		parameters.push(BaseIfc.toStepValue(this.Extent))
		parameters.push(BaseIfc.toStepValue(this.BoxAlignment))

        return parameters.join();
    }
}