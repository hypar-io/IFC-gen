
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcLengthMeasure} from "./IfcLengthMeasure"
import {IfcAxis2Placement} from "./IfcAxis2Placement"
import {IfcPlanarExtent} from "./IfcPlanarExtent"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcplanarbox.htm
export class IfcPlanarBox extends IfcPlanarExtent {
	Placement : IfcAxis2Placement

    constructor(sizeInX : IfcLengthMeasure, sizeInY : IfcLengthMeasure, placement : IfcAxis2Placement) {
        super(sizeInX,sizeInY)

		this.Placement = placement

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.SizeInX != null ? this.toStepValue(this.SizeInX) : "$");
		parameters.push(this.SizeInY != null ? this.toStepValue(this.SizeInY) : "$");
		parameters.push(this.Placement != null ? this.toStepValue(this.Placement) : "$");

        return parameters.join();
    }
}