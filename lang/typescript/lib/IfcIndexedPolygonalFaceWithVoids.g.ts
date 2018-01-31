
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcPositiveInteger} from "./IfcPositiveInteger.g"
import {IfcPolygonalFaceSet} from "./IfcPolygonalFaceSet.g"
import {IfcIndexedPolygonalFace} from "./IfcIndexedPolygonalFace.g"

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