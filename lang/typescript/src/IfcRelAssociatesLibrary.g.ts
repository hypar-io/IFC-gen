
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcObjectDefinition} from "./IfcObjectDefinition.g"
import {IfcPropertyDefinition} from "./IfcPropertyDefinition.g"
import {IfcLibraryInformation} from "./IfcLibraryInformation.g"
import {IfcLibraryReference} from "./IfcLibraryReference.g"
import {IfcRelAssociates} from "./IfcRelAssociates.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociateslibrary.htm
 */
export class IfcRelAssociatesLibrary extends IfcRelAssociates {
	RelatingLibrary : IfcLibraryInformation|IfcLibraryReference

    constructor(globalId : IfcGloballyUniqueId, relatedObjects : Array<IfcObjectDefinition|IfcPropertyDefinition>, relatingLibrary : IfcLibraryInformation|IfcLibraryReference) {
        super(globalId,relatedObjects)

		this.RelatingLibrary = relatingLibrary

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? BaseIfc.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? BaseIfc.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.RelatedObjects != null ? BaseIfc.toStepValue(this.RelatedObjects) : "$");
		parameters.push(this.RelatingLibrary != null ? BaseIfc.toStepValue(this.RelatingLibrary) : "$");

        return parameters.join();
    }
}