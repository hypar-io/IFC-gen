
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcTopologicalRepresentationItem} from "./IfcTopologicalRepresentationItem.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcvertex.htm
 */
export class IfcVertex extends IfcTopologicalRepresentationItem {

    constructor() {
        super()
    }
    getStepParameters() : string {
        var parameters = new Array<string>();

        return parameters.join();
    }
}