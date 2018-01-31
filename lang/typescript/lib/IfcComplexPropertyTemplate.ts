
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcRelDeclares} from "./IfcRelDeclares"
import {IfcRelAssociates} from "./IfcRelAssociates"
import {IfcPropertySetTemplate} from "./IfcPropertySetTemplate"
import {IfcComplexPropertyTemplateTypeEnum} from "./IfcComplexPropertyTemplateTypeEnum"
import {IfcPropertyTemplate} from "./IfcPropertyTemplate"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccomplexpropertytemplate.htm
export class IfcComplexPropertyTemplate extends IfcPropertyTemplate {
	UsageName : IfcLabel// optional
	TemplateType : IfcComplexPropertyTemplateTypeEnum// optional
	HasPropertyTemplates : Array<IfcPropertyTemplate>// optional

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
		this.HasPropertyTemplates = new Array<IfcPropertyTemplate>()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.UsageName != null ? this.toStepValue(this.UsageName) : "$");
		parameters.push(this.toStepValue(this.TemplateType));
		parameters.push(this.HasPropertyTemplates != null ? this.toStepValue(this.HasPropertyTemplates) : "$");

        return parameters.join();
    }
}