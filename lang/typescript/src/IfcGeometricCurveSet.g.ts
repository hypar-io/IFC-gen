
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcGeometricSetSelect} from "./IfcGeometricSetSelect.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcGeometricSet} from "./IfcGeometricSet.g"

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