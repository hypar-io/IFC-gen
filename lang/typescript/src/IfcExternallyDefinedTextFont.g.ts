
import {BaseIfc} from "./BaseIfc"
import {IfcURIReference} from "./IfcURIReference.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcExternalReference} from "./IfcExternalReference.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcexternallydefinedtextfont.htm
 */
export class IfcExternallyDefinedTextFont extends IfcExternalReference {

    constructor() {
        super()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Location != null ? BaseIfc.toStepValue(this.Location) : "$");
		parameters.push(this.Identification != null ? BaseIfc.toStepValue(this.Identification) : "$");
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");

        return parameters.join();
    }
}