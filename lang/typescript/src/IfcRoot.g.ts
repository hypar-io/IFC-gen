
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcObjectDefinition} from "./IfcObjectDefinition.g"
import {IfcPropertyDefinition} from "./IfcPropertyDefinition.g"
import {IfcRelationship} from "./IfcRelationship.g"

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