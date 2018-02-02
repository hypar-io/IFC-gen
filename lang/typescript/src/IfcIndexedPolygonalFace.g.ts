
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcPositiveInteger} from "./IfcPositiveInteger.g"
import {IfcPolygonalFaceSet} from "./IfcPolygonalFaceSet.g"
import {IfcTessellatedItem} from "./IfcTessellatedItem.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcindexedpolygonalface.htm
 */
export class IfcIndexedPolygonalFace extends IfcTessellatedItem {
	CoordIndex : Array<IfcPositiveInteger>
	ToFaceSet : Array<IfcPolygonalFaceSet> // inverse

    constructor(coordIndex : Array<IfcPositiveInteger>) {
        super()
		this.ToFaceSet = new Array<IfcPolygonalFaceSet>()

		this.CoordIndex = coordIndex

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.CoordIndex != null ? BaseIfc.toStepValue(this.CoordIndex) : "$");

        return parameters.join();
    }
}