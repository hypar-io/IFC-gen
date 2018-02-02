
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcCartesianPointList3D} from "./IfcCartesianPointList3D.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcIndexedColourMap} from "./IfcIndexedColourMap.g"
import {IfcIndexedTextureMap} from "./IfcIndexedTextureMap.g"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcIndexedPolygonalFace} from "./IfcIndexedPolygonalFace.g"
import {IfcPositiveInteger} from "./IfcPositiveInteger.g"
import {IfcTessellatedFaceSet} from "./IfcTessellatedFaceSet.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpolygonalfaceset.htm
 */
export class IfcPolygonalFaceSet extends IfcTessellatedFaceSet {
	Closed : IfcBoolean // optional
	Faces : Array<IfcIndexedPolygonalFace>
	PnIndex : Array<IfcPositiveInteger> // optional

    constructor(coordinates : IfcCartesianPointList3D, faces : Array<IfcIndexedPolygonalFace>) {
        super(coordinates)
		this.PnIndex = new Array<IfcPositiveInteger>()

		this.Faces = faces

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Coordinates != null ? BaseIfc.toStepValue(this.Coordinates) : "$");
		parameters.push(this.Closed != null ? BaseIfc.toStepValue(this.Closed) : "$");
		parameters.push(this.Faces != null ? BaseIfc.toStepValue(this.Faces) : "$");
		parameters.push(this.PnIndex != null ? BaseIfc.toStepValue(this.PnIndex) : "$");

        return parameters.join();
    }
}