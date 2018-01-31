
import {BaseIfc} from "./BaseIfc"
import {IfcURIReference} from "./IfcURIReference"
import {IfcIdentifier} from "./IfcIdentifier"
import {IfcLabel} from "./IfcLabel"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcExternalReference} from "./IfcExternalReference"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcexternallydefinedsurfacestyle.htm
export class IfcExternallyDefinedSurfaceStyle extends IfcExternalReference {

    constructor() {
        super()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Location != null ? this.toStepValue(this.Location) : "$");
		parameters.push(this.Identification != null ? this.toStepValue(this.Identification) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");

        return parameters.join();
    }
}