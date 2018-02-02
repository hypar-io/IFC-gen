
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
		parameters.push(this.GlobalId != null ? BaseIfc.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? BaseIfc.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(BaseIfc.toStepValue(this.TemplateType));
		parameters.push(this.PrimaryMeasureType != null ? BaseIfc.toStepValue(this.PrimaryMeasureType) : "$");
		parameters.push(this.SecondaryMeasureType != null ? BaseIfc.toStepValue(this.SecondaryMeasureType) : "$");
		parameters.push(this.Enumerators != null ? BaseIfc.toStepValue(this.Enumerators) : "$");
		parameters.push(this.PrimaryUnit != null ? BaseIfc.toStepValue(this.PrimaryUnit) : "$");
		parameters.push(this.SecondaryUnit != null ? BaseIfc.toStepValue(this.SecondaryUnit) : "$");
		parameters.push(this.Expression != null ? BaseIfc.toStepValue(this.Expression) : "$");
		parameters.push(BaseIfc.toStepValue(this.AccessState));

        return parameters.join();
    }
}