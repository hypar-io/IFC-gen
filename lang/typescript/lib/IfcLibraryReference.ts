
import {BaseIfc} from "./BaseIfc"
import {IfcURIReference} from "./IfcURIReference"
import {IfcIdentifier} from "./IfcIdentifier"
import {IfcLabel} from "./IfcLabel"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcText} from "./IfcText"
import {IfcLanguageId} from "./IfcLanguageId"
import {IfcLibraryInformation} from "./IfcLibraryInformation"
import {IfcRelAssociatesLibrary} from "./IfcRelAssociatesLibrary"
import {IfcExternalReference} from "./IfcExternalReference"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclibraryreference.htm
export class IfcLibraryReference extends IfcExternalReference {
	Description : IfcText// optional
	Language : IfcLanguageId// optional
	ReferencedLibrary : IfcLibraryInformation// optional
	LibraryRefForObjects : Array<IfcRelAssociatesLibrary>// inverse

    constructor() {
        super()
		this.LibraryRefForObjects = new Array<IfcRelAssociatesLibrary>()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Location != null ? this.toStepValue(this.Location) : "$");
		parameters.push(this.Identification != null ? this.toStepValue(this.Identification) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.Language != null ? this.toStepValue(this.Language) : "$");
		parameters.push(this.ReferencedLibrary != null ? this.toStepValue(this.ReferencedLibrary) : "$");

        return parameters.join();
    }
}