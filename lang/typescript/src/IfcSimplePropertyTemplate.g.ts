
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
import {IfcUnit} from "./IfcUnit.g"
import {IfcStateEnum} from "./IfcStateEnum.g"
import {IfcPropertyTemplate} from "./IfcPropertyTemplate.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsimplepropertytemplate.htm
export class IfcSimplePropertyTemplate extends IfcPropertyTemplate {
	TemplateType : IfcSimplePropertyTemplateTypeEnum// optional
	PrimaryMeasureType : IfcLabel// optional
	SecondaryMeasureType : IfcLabel// optional
	Enumerators : IfcPropertyEnumeration// optional
	PrimaryUnit : IfcUnit// optional
	SecondaryUnit : IfcUnit// optional
	Expression : IfcLabel// optional
	AccessState : IfcStateEnum// optional

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.toStepValue(this.TemplateType));
		parameters.push(this.PrimaryMeasureType != null ? this.toStepValue(this.PrimaryMeasureType) : "$");
		parameters.push(this.SecondaryMeasureType != null ? this.toStepValue(this.SecondaryMeasureType) : "$");
		parameters.push(this.Enumerators != null ? this.toStepValue(this.Enumerators) : "$");
		parameters.push(this.PrimaryUnit != null ? this.toStepValue(this.PrimaryUnit) : "$");
		parameters.push(this.SecondaryUnit != null ? this.toStepValue(this.SecondaryUnit) : "$");
		parameters.push(this.Expression != null ? this.toStepValue(this.Expression) : "$");
		parameters.push(this.toStepValue(this.AccessState));

        return parameters.join();
    }
}