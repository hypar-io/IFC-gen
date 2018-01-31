
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcDefinitionSelect} from "./IfcDefinitionSelect"
import {IfcLibrarySelect} from "./IfcLibrarySelect"
import {IfcRelAssociates} from "./IfcRelAssociates"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociateslibrary.htm
export class IfcRelAssociatesLibrary extends IfcRelAssociates {
	RelatingLibrary : IfcLibrarySelect

    constructor(globalId : IfcGloballyUniqueId, relatedObjects : Array<IfcDefinitionSelect>, relatingLibrary : IfcLibrarySelect) {
        super(globalId,relatedObjects)

		this.RelatingLibrary = relatingLibrary

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.RelatedObjects != null ? this.toStepValue(this.RelatedObjects) : "$");
		parameters.push(this.RelatingLibrary != null ? this.toStepValue(this.RelatingLibrary) : "$");

        return parameters.join();
    }
}