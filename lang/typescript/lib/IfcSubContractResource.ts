
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcRelAssigns} from "./IfcRelAssigns"
import {IfcRelNests} from "./IfcRelNests"
import {IfcRelDeclares} from "./IfcRelDeclares"
import {IfcRelAggregates} from "./IfcRelAggregates"
import {IfcRelAssociates} from "./IfcRelAssociates"
import {IfcRelDefinesByObject} from "./IfcRelDefinesByObject"
import {IfcRelDefinesByType} from "./IfcRelDefinesByType"
import {IfcRelDefinesByProperties} from "./IfcRelDefinesByProperties"
import {IfcIdentifier} from "./IfcIdentifier"
import {IfcRelAssignsToResource} from "./IfcRelAssignsToResource"
import {IfcResourceTime} from "./IfcResourceTime"
import {IfcAppliedValue} from "./IfcAppliedValue"
import {IfcPhysicalQuantity} from "./IfcPhysicalQuantity"
import {IfcSubContractResourceTypeEnum} from "./IfcSubContractResourceTypeEnum"
import {IfcConstructionResource} from "./IfcConstructionResource"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsubcontractresource.htm
export class IfcSubContractResource extends IfcConstructionResource {
	PredefinedType : IfcSubContractResourceTypeEnum// optional

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.ObjectType != null ? this.toStepValue(this.ObjectType) : "$");
		parameters.push(this.Identification != null ? this.toStepValue(this.Identification) : "$");
		parameters.push(this.LongDescription != null ? this.toStepValue(this.LongDescription) : "$");
		parameters.push(this.Usage != null ? this.toStepValue(this.Usage) : "$");
		parameters.push(this.BaseCosts != null ? this.toStepValue(this.BaseCosts) : "$");
		parameters.push(this.BaseQuantity != null ? this.toStepValue(this.BaseQuantity) : "$");
		parameters.push(this.toStepValue(this.PredefinedType));

        return parameters.join();
    }
}