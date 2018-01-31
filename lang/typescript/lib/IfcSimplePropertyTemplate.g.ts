
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcRelDeclares} from "./IfcRelDeclares"
import {IfcRelAssociates} from "./IfcRelAssociates"
import {IfcComplexPropertyTemplate} from "./IfcComplexPropertyTemplate"
import {IfcPropertySetTemplate} from "./IfcPropertySetTemplate"
import {IfcSimplePropertyTemplateTypeEnum} from "./IfcSimplePropertyTemplateTypeEnum"
import {IfcPropertyEnumeration} from "./IfcPropertyEnumeration"
import {IfcUnit} from "./IfcUnit"
import {IfcStateEnum} from "./IfcStateEnum"
import {IfcPropertyTemplate} from "./IfcPropertyTemplate"

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