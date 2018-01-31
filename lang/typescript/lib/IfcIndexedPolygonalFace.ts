
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcPositiveInteger} from "./IfcPositiveInteger"
import {IfcPolygonalFaceSet} from "./IfcPolygonalFaceSet"
import {IfcIndexedPolygonalFaceWithVoids} from "./IfcIndexedPolygonalFaceWithVoids"
import {IfcTessellatedItem} from "./IfcTessellatedItem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcindexedpolygonalface.htm
export class IfcIndexedPolygonalFace extends IfcTessellatedItem {
	CoordIndex : Array<IfcPositiveInteger>
	ToFaceSet : Array<IfcPolygonalFaceSet>// inverse

    constructor(coordIndex : Array<IfcPositiveInteger>) {
        super()
		this.ToFaceSet = new Array<IfcPolygonalFaceSet>()

		this.CoordIndex = coordIndex

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.CoordIndex != null ? this.toStepValue(this.CoordIndex) : "$");

        return parameters.join();
    }
}