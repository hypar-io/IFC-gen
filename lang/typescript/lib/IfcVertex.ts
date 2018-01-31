
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcVertexPoint} from "./IfcVertexPoint"
import {IfcTopologicalRepresentationItem} from "./IfcTopologicalRepresentationItem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcvertex.htm
export class IfcVertex extends IfcTopologicalRepresentationItem {

    constructor() {
        super()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();

        return parameters.join();
    }
}