
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcObjectDefinition} from "./IfcObjectDefinition"
import {IfcRelDecomposes} from "./IfcRelDecomposes"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelnests.htm
export class IfcRelNests extends IfcRelDecomposes {
	RelatingObject : IfcObjectDefinition
	RelatedObjects : Array<IfcObjectDefinition>

    constructor(globalId : IfcGloballyUniqueId, relatingObject : IfcObjectDefinition, relatedObjects : Array<IfcObjectDefinition>) {
        super(globalId)

		this.RelatingObject = relatingObject
		this.RelatedObjects = relatedObjects

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.RelatingObject != null ? this.toStepValue(this.RelatingObject) : "$");
		parameters.push(this.RelatedObjects != null ? this.toStepValue(this.RelatedObjects) : "$");

        return parameters.join();
    }
}