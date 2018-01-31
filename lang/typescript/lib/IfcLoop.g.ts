
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcEdgeLoop} from "./IfcEdgeLoop.g"
import {IfcPolyLoop} from "./IfcPolyLoop.g"
import {IfcVertexLoop} from "./IfcVertexLoop.g"
import {IfcTopologicalRepresentationItem} from "./IfcTopologicalRepresentationItem.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcloop.htm
export class IfcLoop extends IfcTopologicalRepresentationItem {

    constructor() {
        super()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();

        return parameters.join();
    }
}