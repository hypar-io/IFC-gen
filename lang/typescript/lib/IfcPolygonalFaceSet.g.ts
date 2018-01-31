
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcCartesianPointList3D} from "./IfcCartesianPointList3D"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcIndexedColourMap} from "./IfcIndexedColourMap"
import {IfcIndexedTextureMap} from "./IfcIndexedTextureMap"
import {IfcBoolean} from "./IfcBoolean"
import {IfcIndexedPolygonalFace} from "./IfcIndexedPolygonalFace"
import {IfcPositiveInteger} from "./IfcPositiveInteger"
import {IfcTessellatedFaceSet} from "./IfcTessellatedFaceSet"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpolygonalfaceset.htm
export class IfcPolygonalFaceSet extends IfcTessellatedFaceSet {
	Closed : IfcBoolean// optional
	Faces : Array<IfcIndexedPolygonalFace>
	PnIndex : Array<IfcPositiveInteger>// optional

    constructor(coordinates : IfcCartesianPointList3D, faces : Array<IfcIndexedPolygonalFace>) {
        super(coordinates)
		this.PnIndex = new Array<IfcPositiveInteger>()

		this.Faces = faces

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Coordinates != null ? this.toStepValue(this.Coordinates) : "$");
		parameters.push(this.Closed != null ? this.toStepValue(this.Closed) : "$");
		parameters.push(this.Faces != null ? this.toStepValue(this.Faces) : "$");
		parameters.push(this.PnIndex != null ? this.toStepValue(this.PnIndex) : "$");

        return parameters.join();
    }
}