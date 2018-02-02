
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcRelAssigns} from "./IfcRelAssigns.g"
import {IfcRelNests} from "./IfcRelNests.g"
import {IfcRelDeclares} from "./IfcRelDeclares.g"
import {IfcRelAggregates} from "./IfcRelAggregates.g"
import {IfcRelAssociates} from "./IfcRelAssociates.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcPropertySetDefinition} from "./IfcPropertySetDefinition.g"
import {IfcRelDefinesByType} from "./IfcRelDefinesByType.g"
import {IfcRelAssignsToResource} from "./IfcRelAssignsToResource.g"
import {IfcTypeObject} from "./IfcTypeObject.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctyperesource.htm
 */
export abstract class IfcTypeResource extends IfcTypeObject {
	Identification : IfcIdentifier // optional
	LongDescription : IfcText // optional
	ResourceType : IfcLabel // optional
	ResourceOf : Array<IfcRelAssignsToResource> // inverse

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
		this.ResourceOf = new Array<IfcRelAssignsToResource>()

    }
}