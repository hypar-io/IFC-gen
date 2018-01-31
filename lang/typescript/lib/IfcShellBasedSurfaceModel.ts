
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcShell} from "./IfcShell"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcshellbasedsurfacemodel.htm
export class IfcShellBasedSurfaceModel extends IfcGeometricRepresentationItem {
	SbsmBoundary : Array<IfcShell>

    get Dim() : IfcDimensionCount{throw "Derived property logic has been implemented for Dim."} // derived

    constructor(sbsmBoundary : Array<IfcShell>) {
        super()

		this.SbsmBoundary = sbsmBoundary

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.SbsmBoundary != null ? this.toStepValue(this.SbsmBoundary) : "$");

        return parameters.join();
    }
}