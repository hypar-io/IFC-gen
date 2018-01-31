
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcEdgeLoop} from "./IfcEdgeLoop"
import {IfcPolyLoop} from "./IfcPolyLoop"
import {IfcVertexLoop} from "./IfcVertexLoop"
import {IfcTopologicalRepresentationItem} from "./IfcTopologicalRepresentationItem"

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