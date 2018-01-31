
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcConnectedFaceSet} from "./IfcConnectedFaceSet"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfacebasedsurfacemodel.htm
export class IfcFaceBasedSurfaceModel extends IfcGeometricRepresentationItem {
	FbsmFaces : Array<IfcConnectedFaceSet>

    get Dim() : IfcDimensionCount{throw "Derived property logic has been implemented for Dim."} // derived

    constructor(fbsmFaces : Array<IfcConnectedFaceSet>) {
        super()

		this.FbsmFaces = fbsmFaces

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.FbsmFaces != null ? this.toStepValue(this.FbsmFaces) : "$");

        return parameters.join();
    }
}