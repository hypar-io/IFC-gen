
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcRelDeclares} from "./IfcRelDeclares.g"
import {IfcRelAssociates} from "./IfcRelAssociates.g"
import {IfcTypeObject} from "./IfcTypeObject.g"
import {IfcRelDefinesByTemplate} from "./IfcRelDefinesByTemplate.g"
import {IfcRelDefinesByProperties} from "./IfcRelDefinesByProperties.g"
import {IfcPropertyDefinition} from "./IfcPropertyDefinition.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertysetdefinition.htm
 */
export abstract class IfcPropertySetDefinition extends IfcPropertyDefinition {
	DefinesType : Array<IfcTypeObject> // inverse
	IsDefinedBy : Array<IfcRelDefinesByTemplate> // inverse
	DefinesOccurrence : Array<IfcRelDefinesByProperties> // inverse

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
		this.DefinesType = new Array<IfcTypeObject>()
		this.IsDefinedBy = new Array<IfcRelDefinesByTemplate>()
		this.DefinesOccurrence = new Array<IfcRelDefinesByProperties>()

    }
}