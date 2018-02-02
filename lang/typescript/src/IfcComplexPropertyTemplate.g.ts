
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcRelDeclares} from "./IfcRelDeclares.g"
import {IfcRelAssociates} from "./IfcRelAssociates.g"
import {IfcPropertySetTemplate} from "./IfcPropertySetTemplate.g"
import {IfcComplexPropertyTemplateTypeEnum} from "./IfcComplexPropertyTemplateTypeEnum.g"
import {IfcPropertyTemplate} from "./IfcPropertyTemplate.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccomplexpropertytemplate.htm
 */
export class IfcComplexPropertyTemplate extends IfcPropertyTemplate {
	UsageName : IfcLabel // optional
	TemplateType : IfcComplexPropertyTemplateTypeEnum // optional
	HasPropertyTemplates : Array<IfcPropertyTemplate> // optional

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
		this.HasPropertyTemplates = new Array<IfcPropertyTemplate>()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? BaseIfc.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? BaseIfc.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.UsageName != null ? BaseIfc.toStepValue(this.UsageName) : "$");
		parameters.push(BaseIfc.toStepValue(this.TemplateType));
		parameters.push(this.HasPropertyTemplates != null ? BaseIfc.toStepValue(this.HasPropertyTemplates) : "$");

        return parameters.join();
    }
}