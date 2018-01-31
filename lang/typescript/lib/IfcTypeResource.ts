
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcRelAssigns} from "./IfcRelAssigns"
import {IfcRelNests} from "./IfcRelNests"
import {IfcRelDeclares} from "./IfcRelDeclares"
import {IfcRelAggregates} from "./IfcRelAggregates"
import {IfcRelAssociates} from "./IfcRelAssociates"
import {IfcIdentifier} from "./IfcIdentifier"
import {IfcPropertySetDefinition} from "./IfcPropertySetDefinition"
import {IfcRelDefinesByType} from "./IfcRelDefinesByType"
import {IfcRelAssignsToResource} from "./IfcRelAssignsToResource"
import {IfcConstructionResourceType} from "./IfcConstructionResourceType"
import {IfcTypeObject} from "./IfcTypeObject"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctyperesource.htm
export abstract class IfcTypeResource extends IfcTypeObject {
	Identification : IfcIdentifier// optional
	LongDescription : IfcText// optional
	ResourceType : IfcLabel// optional
	ResourceOf : Array<IfcRelAssignsToResource>// inverse

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
		this.ResourceOf = new Array<IfcRelAssignsToResource>()

    }
}