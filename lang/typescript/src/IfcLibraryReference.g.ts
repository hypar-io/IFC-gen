
import {BaseIfc} from "./BaseIfc"
import {IfcURIReference} from "./IfcURIReference.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcText} from "./IfcText.g"
import {IfcLanguageId} from "./IfcLanguageId.g"
import {IfcLibraryInformation} from "./IfcLibraryInformation.g"
import {IfcRelAssociatesLibrary} from "./IfcRelAssociatesLibrary.g"
import {IfcExternalReference} from "./IfcExternalReference.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclibraryreference.htm
 */
export class IfcLibraryReference extends IfcExternalReference {
	Description : IfcText // optional
	Language : IfcLanguageId // optional
	ReferencedLibrary : IfcLibraryInformation // optional
	LibraryRefForObjects : Array<IfcRelAssociatesLibrary> // inverse

    constructor() {
        super()
		this.LibraryRefForObjects = new Array<IfcRelAssociatesLibrary>()

    }
    getStepParameters() : string {
            var parameters = new Array<string>();
    		parameters.push(BaseIfc.toStepValue(this.Location))
		parameters.push(BaseIfc.toStepValue(this.Identification))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.Language))
		parameters.push(BaseIfc.toStepValue(this.ReferencedLibrary))

            return parameters.join();
        }
}