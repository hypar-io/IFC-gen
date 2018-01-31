
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcPositiveInteger} from "./IfcPositiveInteger"
import {IfcPolygonalFaceSet} from "./IfcPolygonalFaceSet"
import {IfcIndexedPolygonalFace} from "./IfcIndexedPolygonalFace"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcindexedpolygonalfacewithvoids.htm
export class IfcIndexedPolygonalFaceWithVoids extends IfcIndexedPolygonalFace {
	InnerCoordIndices : Array<Array<IfcPositiveInteger>>

    constructor(coordIndex : Array<IfcPositiveInteger>, innerCoordIndices : Array<Array<IfcPositiveInteger>>) {
        super(coordIndex)

		this.InnerCoordIndices = innerCoordIndices

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.CoordIndex != null ? this.toStepValue(this.CoordIndex) : "$");
		parameters.push(this.InnerCoordIndices != null ? this.toStepValue(this.InnerCoordIndices) : "$");

        return parameters.join();
    }
}