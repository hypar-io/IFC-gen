
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcRelDeclares} from "./IfcRelDeclares"
import {IfcRelAssociates} from "./IfcRelAssociates"
import {IfcPropertySetDefinition} from "./IfcPropertySetDefinition"
import {IfcPropertyTemplateDefinition} from "./IfcPropertyTemplateDefinition"
import {IfcRoot} from "./IfcRoot"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertydefinition.htm
export abstract class IfcPropertyDefinition extends IfcRoot {
	HasContext : Array<IfcRelDeclares>// inverse
	HasAssociations : Array<IfcRelAssociates>// inverse

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
		this.HasContext = new Array<IfcRelDeclares>()
		this.HasAssociations = new Array<IfcRelAssociates>()

    }
}