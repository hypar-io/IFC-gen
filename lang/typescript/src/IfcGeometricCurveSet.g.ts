
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcCurve} from "./IfcCurve.g"
import {IfcPoint} from "./IfcPoint.g"
import {IfcSurface} from "./IfcSurface.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcGeometricSet} from "./IfcGeometricSet.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgeometriccurveset.htm
 */
export class IfcGeometricCurveSet extends IfcGeometricSet {

    constructor(elements : Array<IfcCurve|IfcPoint|IfcSurface>) {
        super(elements)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Elements))

        return parameters.join();
    }
}