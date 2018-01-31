
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcFace} from "./IfcFace"
import {IfcConnectedFaceSet} from "./IfcConnectedFaceSet"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcopenshell.htm
export class IfcOpenShell extends IfcConnectedFaceSet {

    constructor(cfsFaces : Array<IfcFace>) {
        super(cfsFaces)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.CfsFaces != null ? this.toStepValue(this.CfsFaces) : "$");

        return parameters.join();
    }
}