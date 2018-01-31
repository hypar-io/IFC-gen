
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcRelDeclares} from "./IfcRelDeclares"
import {IfcRelAssociates} from "./IfcRelAssociates"
import {IfcTypeObject} from "./IfcTypeObject"
import {IfcRelDefinesByTemplate} from "./IfcRelDefinesByTemplate"
import {IfcRelDefinesByProperties} from "./IfcRelDefinesByProperties"
import {IfcPreDefinedPropertySet} from "./IfcPreDefinedPropertySet"
import {IfcPropertySet} from "./IfcPropertySet"
import {IfcQuantitySet} from "./IfcQuantitySet"
import {IfcPropertyDefinition} from "./IfcPropertyDefinition"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertysetdefinition.htm
export abstract class IfcPropertySetDefinition extends IfcPropertyDefinition {
	DefinesType : Array<IfcTypeObject>// inverse
	IsDefinedBy : Array<IfcRelDefinesByTemplate>// inverse
	DefinesOccurrence : Array<IfcRelDefinesByProperties>// inverse

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
		this.DefinesType = new Array<IfcTypeObject>()
		this.IsDefinedBy = new Array<IfcRelDefinesByTemplate>()
		this.DefinesOccurrence = new Array<IfcRelDefinesByProperties>()

    }
}