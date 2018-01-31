
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcObjectDefinition} from "./IfcObjectDefinition"
import {IfcPropertyDefinition} from "./IfcPropertyDefinition"
import {IfcRelationship} from "./IfcRelationship"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcroot.htm
export abstract class IfcRoot extends BaseIfc {
	GlobalId : IfcGloballyUniqueId
	OwnerHistory : IfcOwnerHistory// optional
	Name : IfcLabel// optional
	Description : IfcText// optional

    constructor(globalId : IfcGloballyUniqueId) {
        super()

		this.GlobalId = globalId

    }
}