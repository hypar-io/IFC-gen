
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcActorSelect} from "./IfcActorSelect"
import {IfcDateTime} from "./IfcDateTime"
import {IfcURIReference} from "./IfcURIReference"
import {IfcText} from "./IfcText"
import {IfcRelAssociatesLibrary} from "./IfcRelAssociatesLibrary"
import {IfcLibraryReference} from "./IfcLibraryReference"
import {IfcExternalInformation} from "./IfcExternalInformation"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclibraryinformation.htm
export class IfcLibraryInformation extends IfcExternalInformation {
	Name : IfcLabel
	Version : IfcLabel// optional
	Publisher : IfcActorSelect// optional
	VersionDate : IfcDateTime// optional
	Location : IfcURIReference// optional
	Description : IfcText// optional
	LibraryInfoForObjects : Array<IfcRelAssociatesLibrary>// inverse
	HasLibraryReferences : Array<IfcLibraryReference>// inverse

    constructor(name : IfcLabel) {
        super()
		this.LibraryInfoForObjects = new Array<IfcRelAssociatesLibrary>()
		this.HasLibraryReferences = new Array<IfcLibraryReference>()

		this.Name = name

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Version != null ? this.toStepValue(this.Version) : "$");
		parameters.push(this.Publisher != null ? this.toStepValue(this.Publisher) : "$");
		parameters.push(this.VersionDate != null ? this.toStepValue(this.VersionDate) : "$");
		parameters.push(this.Location != null ? this.toStepValue(this.Location) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");

        return parameters.join();
    }
}