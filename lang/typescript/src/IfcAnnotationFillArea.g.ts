
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcCurve} from "./IfcCurve.g"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcannotationfillarea.htm
export class IfcAnnotationFillArea extends IfcGeometricRepresentationItem {
	OuterBoundary : IfcCurve
	InnerBoundaries : Array<IfcCurve>// optional

    constructor(outerBoundary : IfcCurve) {
        super()
		this.InnerBoundaries = new Array<IfcCurve>()

		this.OuterBoundary = outerBoundary

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.OuterBoundary != null ? this.toStepValue(this.OuterBoundary) : "$");
		parameters.push(this.InnerBoundaries != null ? this.toStepValue(this.InnerBoundaries) : "$");

        return parameters.join();
    }
}