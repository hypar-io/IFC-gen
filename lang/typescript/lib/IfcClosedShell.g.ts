
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcFace} from "./IfcFace.g"
import {IfcConnectedFaceSet} from "./IfcConnectedFaceSet.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcclosedshell.htm
export class IfcClosedShell extends IfcConnectedFaceSet {

    constructor(cfsFaces : Array<IfcFace>) {
        super(cfsFaces)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.CfsFaces != null ? this.toStepValue(this.CfsFaces) : "$");

        return parameters.join();
    }
}