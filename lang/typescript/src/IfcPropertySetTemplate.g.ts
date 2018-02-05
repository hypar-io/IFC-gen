
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcRelDeclares} from "./IfcRelDeclares.g"
import {IfcRelAssociates} from "./IfcRelAssociates.g"
import {IfcPropertySetTemplateTypeEnum} from "./IfcPropertySetTemplateTypeEnum.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcPropertyTemplate} from "./IfcPropertyTemplate.g"
import {IfcRelDefinesByTemplate} from "./IfcRelDefinesByTemplate.g"
import {IfcPropertyTemplateDefinition} from "./IfcPropertyTemplateDefinition.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertysettemplate.htm
 */
export class IfcPropertySetTemplate extends IfcPropertyTemplateDefinition {
	TemplateType : IfcPropertySetTemplateTypeEnum // optional
	ApplicableEntity : IfcIdentifier // optional
	HasPropertyTemplates : Array<IfcPropertyTemplate>
	Defines : Array<IfcRelDefinesByTemplate> // inverse

    constructor(globalId : IfcGloballyUniqueId, hasPropertyTemplates : Array<IfcPropertyTemplate>) {
        super(globalId)
		this.Defines = new Array<IfcRelDefinesByTemplate>()

		this.HasPropertyTemplates = hasPropertyTemplates

    }
    getStepParameters() : string {
            var parameters = new Array<string>();
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.TemplateType))
		parameters.push(BaseIfc.toStepValue(this.ApplicableEntity))
		parameters.push(BaseIfc.toStepValue(this.HasPropertyTemplates))

            return parameters.join();
        }
}