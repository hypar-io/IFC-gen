
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcIndexedPolygonalFace} from "./IfcIndexedPolygonalFace"
import {IfcTessellatedFaceSet} from "./IfcTessellatedFaceSet"
import {IfcGeometricRepresentationItem} from "./IfcGeometricRepresentationItem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctessellateditem.htm
export abstract class IfcTessellatedItem extends IfcGeometricRepresentationItem {

    constructor() {
        super()

    }
}