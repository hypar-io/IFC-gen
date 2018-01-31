
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
import {IfcRelDefinesByObject} from "./IfcRelDefinesByObject.g"
import {IfcRelDefinesByType} from "./IfcRelDefinesByType.g"
import {IfcRelDefinesByProperties} from "./IfcRelDefinesByProperties.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcRelAssignsToResource} from "./IfcRelAssignsToResource.g"
import {IfcConstructionResource} from "./IfcConstructionResource.g"
import {IfcObject} from "./IfcObject.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcresource.htm
export abstract class IfcResource extends IfcObject {
	Identification : IfcIdentifier// optional
	LongDescription : IfcText// optional
	ResourceOf : Array<IfcRelAssignsToResource>// inverse

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
		this.ResourceOf = new Array<IfcRelAssignsToResource>()

    }
}