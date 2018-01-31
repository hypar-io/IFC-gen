
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcRelDeclares} from "./IfcRelDeclares.g"
import {IfcRelAssociates} from "./IfcRelAssociates.g"
import {IfcComplexPropertyTemplate} from "./IfcComplexPropertyTemplate.g"
import {IfcPropertySetTemplate} from "./IfcPropertySetTemplate.g"
import {IfcSimplePropertyTemplate} from "./IfcSimplePropertyTemplate.g"
import {IfcPropertyTemplateDefinition} from "./IfcPropertyTemplateDefinition.g"

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