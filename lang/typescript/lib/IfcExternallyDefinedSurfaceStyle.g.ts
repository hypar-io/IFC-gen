
import {BaseIfc} from "./BaseIfc"
import {IfcURIReference} from "./IfcURIReference.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcExternalReference} from "./IfcExternalReference.g"

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