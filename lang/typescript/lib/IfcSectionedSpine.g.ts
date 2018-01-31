
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcCompositeCurve} from "./IfcCompositeCurve.g"
import {IfcProfileDef} from "./IfcProfileDef.g"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsectionedspine.htm
export class IfcSectionedSpine extends IfcGeometricRepresentationItem {
	SpineCurve : IfcCompositeCurve
	CrossSections : Array<IfcProfileDef>
	CrossSectionPositions : Array<IfcAxis2Placement3D>

    get Dim() : IfcDimensionCount{throw "Derived property logic has been implemented for Dim."} // derived

    constructor(spineCurve : IfcCompositeCurve, crossSections : Array<IfcProfileDef>, crossSectionPositions : Array<IfcAxis2Placement3D>) {
        super()

		this.SpineCurve = spineCurve
		this.CrossSections = crossSections
		this.CrossSectionPositions = crossSectionPositions

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.SpineCurve != null ? this.toStepValue(this.SpineCurve) : "$");
		parameters.push(this.CrossSections != null ? this.toStepValue(this.CrossSections) : "$");
		parameters.push(this.CrossSectionPositions != null ? this.toStepValue(this.CrossSectionPositions) : "$");

        return parameters.join();
    }
}