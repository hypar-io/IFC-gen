
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcConnectedFaceSet} from "./IfcConnectedFaceSet.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfacebasedsurfacemodel.htm
 */
export class IfcFaceBasedSurfaceModel extends IfcGeometricRepresentationItem {
	FbsmFaces : Array<IfcConnectedFaceSet>

    get Dim() : IfcDimensionCount{throw "Derived property logic has not been implemented for Dim."} // derived
    set Dim(value : IfcDimensionCount){super.Dim = value}

    constructor(fbsmFaces : Array<IfcConnectedFaceSet>) {
        super()
		this.FbsmFaces = fbsmFaces

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.FbsmFaces))

        return parameters.join();
    }
}