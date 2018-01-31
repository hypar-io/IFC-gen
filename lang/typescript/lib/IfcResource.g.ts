
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
import {IfcRelDefinesByObject} from "./IfcRelDefinesByObject"
import {IfcRelDefinesByType} from "./IfcRelDefinesByType"
import {IfcRelDefinesByProperties} from "./IfcRelDefinesByProperties"
import {IfcIdentifier} from "./IfcIdentifier"
import {IfcRelAssignsToResource} from "./IfcRelAssignsToResource"
import {IfcConstructionResource} from "./IfcConstructionResource"
import {IfcObject} from "./IfcObject"

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