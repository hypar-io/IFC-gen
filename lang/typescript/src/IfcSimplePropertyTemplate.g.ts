
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcRelDeclares} from "./IfcRelDeclares.g"
import {IfcRelAssociates} from "./IfcRelAssociates.g"
import {IfcComplexPropertyTemplate} from "./IfcComplexPropertyTemplate.g"
import {IfcPropertySetTemplate} from "./IfcPropertySetTemplate.g"
import {IfcSimplePropertyTemplateTypeEnum} from "./IfcSimplePropertyTemplateTypeEnum.g"
import {IfcPropertyEnumeration} from "./IfcPropertyEnumeration.g"
import {IfcDerivedUnit} from "./IfcDerivedUnit.g"
import {IfcMonetaryUnit} from "./IfcMonetaryUnit.g"
import {IfcNamedUnit} from "./IfcNamedUnit.g"
import {IfcStateEnum} from "./IfcStateEnum.g"
import {IfcPropertyTemplate} from "./IfcPropertyTemplate.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsimplepropertytemplate.htm
 */
export class IfcSimplePropertyTemplate extends IfcPropertyTemplate {
	TemplateType : IfcSimplePropertyTemplateTypeEnum // optional
	PrimaryMeasureType : IfcLabel // optional
	SecondaryMeasureType : IfcLabel // optional
	Enumerators : IfcPropertyEnumeration // optional
	PrimaryUnit : IfcDerivedUnit|IfcMonetaryUnit|IfcNamedUnit // optional
	SecondaryUnit : IfcDerivedUnit|IfcMonetaryUnit|IfcNamedUnit // optional
	Expression : IfcLabel // optional
	AccessState : IfcStateEnum // optional

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.TemplateType))
		parameters.push(BaseIfc.toStepValue(this.PrimaryMeasureType))
		parameters.push(BaseIfc.toStepValue(this.SecondaryMeasureType))
		parameters.push(BaseIfc.toStepValue(this.Enumerators))
		parameters.push(BaseIfc.toStepValue(this.PrimaryUnit))
		parameters.push(BaseIfc.toStepValue(this.SecondaryUnit))
		parameters.push(BaseIfc.toStepValue(this.Expression))
		parameters.push(BaseIfc.toStepValue(this.AccessState))

        return parameters.join();
    }
}