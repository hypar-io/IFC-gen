
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcCartesianPoint} from "./IfcCartesianPoint.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundingbox.htm
 */
export class IfcBoundingBox extends IfcGeometricRepresentationItem {
	Corner : IfcCartesianPoint
	XDim : IfcPositiveLengthMeasure
	YDim : IfcPositiveLengthMeasure
	ZDim : IfcPositiveLengthMeasure

    get Dim() : IfcDimensionCount{throw "Derived property logic has not been implemented for Dim."} // derived
    set Dim(value : IfcDimensionCount){super.Dim = value}

    constructor(corner : IfcCartesianPoint, xDim : IfcPositiveLengthMeasure, yDim : IfcPositiveLengthMeasure, zDim : IfcPositiveLengthMeasure) {
        super()

		this.Corner = corner
		this.XDim = xDim
		this.YDim = yDim
		this.ZDim = zDim

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Corner != null ? BaseIfc.toStepValue(this.Corner) : "$");
		parameters.push(this.XDim != null ? BaseIfc.toStepValue(this.XDim) : "$");
		parameters.push(this.YDim != null ? BaseIfc.toStepValue(this.YDim) : "$");
		parameters.push(this.ZDim != null ? BaseIfc.toStepValue(this.ZDim) : "$");

        return parameters.join();
    }
}