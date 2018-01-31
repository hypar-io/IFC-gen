
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcConnectedFaceSet} from "./IfcConnectedFaceSet"
import {IfcEdge} from "./IfcEdge"
import {IfcFace} from "./IfcFace"
import {IfcFaceBound} from "./IfcFaceBound"
import {IfcLoop} from "./IfcLoop"
import {IfcPath} from "./IfcPath"
import {IfcVertex} from "./IfcVertex"
import {IfcRepresentationItem} from "./IfcRepresentationItem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctopologicalrepresentationitem.htm
export abstract class IfcTopologicalRepresentationItem extends IfcRepresentationItem {

    constructor() {
        super()

    }
}