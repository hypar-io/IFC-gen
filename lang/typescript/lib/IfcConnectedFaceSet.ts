
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcFace} from "./IfcFace"
import {IfcClosedShell} from "./IfcClosedShell"
import {IfcOpenShell} from "./IfcOpenShell"
import {IfcTopologicalRepresentationItem} from "./IfcTopologicalRepresentationItem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconnectedfaceset.htm
export class IfcConnectedFaceSet extends IfcTopologicalRepresentationItem {
	CfsFaces : Array<IfcFace>

    constructor(cfsFaces : Array<IfcFace>) {
        super()

		this.CfsFaces = cfsFaces

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.CfsFaces != null ? this.toStepValue(this.CfsFaces) : "$");

        return parameters.join();
    }
}