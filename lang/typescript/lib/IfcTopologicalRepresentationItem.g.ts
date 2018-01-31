
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcConnectedFaceSet} from "./IfcConnectedFaceSet.g"
import {IfcEdge} from "./IfcEdge.g"
import {IfcFace} from "./IfcFace.g"
import {IfcFaceBound} from "./IfcFaceBound.g"
import {IfcLoop} from "./IfcLoop.g"
import {IfcPath} from "./IfcPath.g"
import {IfcVertex} from "./IfcVertex.g"
import {IfcRepresentationItem} from "./IfcRepresentationItem.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctopologicalrepresentationitem.htm
export abstract class IfcTopologicalRepresentationItem extends IfcRepresentationItem {

    constructor() {
        super()

    }
}