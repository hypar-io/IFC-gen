
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcRelDeclares} from "./IfcRelDeclares"
import {IfcRelAssociates} from "./IfcRelAssociates"
import {IfcPropertySetTemplateTypeEnum} from "./IfcPropertySetTemplateTypeEnum"
import {IfcIdentifier} from "./IfcIdentifier"
import {IfcPropertyTemplate} from "./IfcPropertyTemplate"
import {IfcRelDefinesByTemplate} from "./IfcRelDefinesByTemplate"
import {IfcPropertyTemplateDefinition} from "./IfcPropertyTemplateDefinition"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertysettemplate.htm
export class IfcPropertySetTemplate extends IfcPropertyTemplateDefinition {
	TemplateType : IfcPropertySetTemplateTypeEnum// optional
	ApplicableEntity : IfcIdentifier// optional
	HasPropertyTemplates : Array<IfcPropertyTemplate>
	Defines : Array<IfcRelDefinesByTemplate>// inverse

    constructor(globalId : IfcGloballyUniqueId, hasPropertyTemplates : Array<IfcPropertyTemplate>) {
        super(globalId)
		this.Defines = new Array<IfcRelDefinesByTemplate>()

		this.HasPropertyTemplates = hasPropertyTemplates

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.toStepValue(this.TemplateType));
		parameters.push(this.ApplicableEntity != null ? this.toStepValue(this.ApplicableEntity) : "$");
		parameters.push(this.HasPropertyTemplates != null ? this.toStepValue(this.HasPropertyTemplates) : "$");

        return parameters.join();
    }
}