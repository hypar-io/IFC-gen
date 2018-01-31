
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcGeometricSetSelect} from "./IfcGeometricSetSelect"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcGeometricSet} from "./IfcGeometricSet"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgeometriccurveset.htm
export class IfcGeometricCurveSet extends IfcGeometricSet {

    constructor(elements : Array<IfcGeometricSetSelect>) {
        super(elements)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Elements != null ? this.toStepValue(this.Elements) : "$");

        return parameters.join();
    }
}