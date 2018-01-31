
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcCartesianPoint} from "./IfcCartesianPoint"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundingbox.htm
export class IfcBoundingBox extends IfcGeometricRepresentationItem {
	Corner : IfcCartesianPoint
	XDim : IfcPositiveLengthMeasure
	YDim : IfcPositiveLengthMeasure
	ZDim : IfcPositiveLengthMeasure

    get Dim() : IfcDimensionCount{throw "Derived property logic has been implemented for Dim."} // derived

    constructor(corner : IfcCartesianPoint, xDim : IfcPositiveLengthMeasure, yDim : IfcPositiveLengthMeasure, zDim : IfcPositiveLengthMeasure) {
        super()

		this.Corner = corner
		this.XDim = xDim
		this.YDim = yDim
		this.ZDim = zDim

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Corner != null ? this.toStepValue(this.Corner) : "$");
		parameters.push(this.XDim != null ? this.toStepValue(this.XDim) : "$");
		parameters.push(this.YDim != null ? this.toStepValue(this.YDim) : "$");
		parameters.push(this.ZDim != null ? this.toStepValue(this.ZDim) : "$");

        return parameters.join();
    }
}