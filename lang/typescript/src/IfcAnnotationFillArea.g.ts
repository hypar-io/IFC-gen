
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcCurve} from "./IfcCurve.g"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcannotationfillarea.htm
 */
export class IfcAnnotationFillArea extends IfcGeometricRepresentationItem {
	OuterBoundary : IfcCurve
	InnerBoundaries : Array<IfcCurve> // optional

    constructor(outerBoundary : IfcCurve) {
        super()
		this.OuterBoundary = outerBoundary

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.OuterBoundary))
		parameters.push(BaseIfc.toStepValue(this.InnerBoundaries))

        return parameters.join();
    }
}