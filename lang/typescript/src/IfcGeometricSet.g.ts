
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcGeometricSetSelect} from "./IfcGeometricSetSelect.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcGeometricCurveSet} from "./IfcGeometricCurveSet.g"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgeometricset.htm
export class IfcGeometricSet extends IfcGeometricRepresentationItem {
	Elements : Array<IfcGeometricSetSelect>

    get Dim() : IfcDimensionCount{throw "Derived property logic has been implemented for Dim."} // derived

    constructor(elements : Array<IfcGeometricSetSelect>) {
        super()

		this.Elements = elements

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Elements != null ? this.toStepValue(this.Elements) : "$");

        return parameters.join();
    }
}