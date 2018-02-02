
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcplanarextent.htm
 */
export class IfcPlanarExtent extends IfcGeometricRepresentationItem {
	SizeInX : IfcLengthMeasure
	SizeInY : IfcLengthMeasure

    constructor(sizeInX : IfcLengthMeasure, sizeInY : IfcLengthMeasure) {
        super()

		this.SizeInX = sizeInX
		this.SizeInY = sizeInY

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.SizeInX != null ? BaseIfc.toStepValue(this.SizeInX) : "$");
		parameters.push(this.SizeInY != null ? BaseIfc.toStepValue(this.SizeInY) : "$");

        return parameters.join();
    }
}