
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcRelDeclares} from "./IfcRelDeclares"
import {IfcRelAssociates} from "./IfcRelAssociates"
import {IfcComplexPropertyTemplate} from "./IfcComplexPropertyTemplate"
import {IfcPropertySetTemplate} from "./IfcPropertySetTemplate"
import {IfcSimplePropertyTemplate} from "./IfcSimplePropertyTemplate"
import {IfcPropertyTemplateDefinition} from "./IfcPropertyTemplateDefinition"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertytemplate.htm
export abstract class IfcPropertyTemplate extends IfcPropertyTemplateDefinition {
	PartOfComplexTemplate : Array<IfcComplexPropertyTemplate>// inverse
	PartOfPsetTemplate : Array<IfcPropertySetTemplate>// inverse

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
		this.PartOfComplexTemplate = new Array<IfcComplexPropertyTemplate>()
		this.PartOfPsetTemplate = new Array<IfcPropertySetTemplate>()

    }
}