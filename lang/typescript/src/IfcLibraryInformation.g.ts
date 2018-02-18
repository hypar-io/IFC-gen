
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcOrganization} from "./IfcOrganization.g"
import {IfcPerson} from "./IfcPerson.g"
import {IfcPersonAndOrganization} from "./IfcPersonAndOrganization.g"
import {IfcDateTime} from "./IfcDateTime.g"
import {IfcURIReference} from "./IfcURIReference.g"
import {IfcText} from "./IfcText.g"
import {IfcRelAssociatesLibrary} from "./IfcRelAssociatesLibrary.g"
import {IfcLibraryReference} from "./IfcLibraryReference.g"
import {IfcExternalInformation} from "./IfcExternalInformation.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclibraryinformation.htm
 */
export class IfcLibraryInformation extends IfcExternalInformation {
	Name : IfcLabel
	Version : IfcLabel // optional
	Publisher : IfcOrganization|IfcPerson|IfcPersonAndOrganization // optional
	VersionDate : IfcDateTime // optional
	Location : IfcURIReference // optional
	Description : IfcText // optional
	LibraryInfoForObjects : Array<IfcRelAssociatesLibrary> // inverse
	HasLibraryReferences : Array<IfcLibraryReference> // inverse

    constructor(name : IfcLabel) {
        super()
		this.Name = name

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Version))
		parameters.push(BaseIfc.toStepValue(this.Publisher))
		parameters.push(BaseIfc.toStepValue(this.VersionDate))
		parameters.push(BaseIfc.toStepValue(this.Location))
		parameters.push(BaseIfc.toStepValue(this.Description))

        return parameters.join();
    }
}