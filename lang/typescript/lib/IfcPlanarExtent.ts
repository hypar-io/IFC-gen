
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcLengthMeasure} from "./IfcLengthMeasure"
import {IfcPlanarBox} from "./IfcPlanarBox"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcplanarextent.htm
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
		parameters.push(this.SizeInX != null ? this.toStepValue(this.SizeInX) : "$");
		parameters.push(this.SizeInY != null ? this.toStepValue(this.SizeInY) : "$");

        return parameters.join();
    }
}