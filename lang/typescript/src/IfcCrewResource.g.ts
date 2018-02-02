
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcRelAssigns} from "./IfcRelAssigns.g"
import {IfcRelNests} from "./IfcRelNests.g"
import {IfcRelDeclares} from "./IfcRelDeclares.g"
import {IfcRelAggregates} from "./IfcRelAggregates.g"
import {IfcRelAssociates} from "./IfcRelAssociates.g"
import {IfcRelDefinesByObject} from "./IfcRelDefinesByObject.g"
import {IfcRelDefinesByType} from "./IfcRelDefinesByType.g"
import {IfcRelDefinesByProperties} from "./IfcRelDefinesByProperties.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcRelAssignsToResource} from "./IfcRelAssignsToResource.g"
import {IfcResourceTime} from "./IfcResourceTime.g"
import {IfcAppliedValue} from "./IfcAppliedValue.g"
import {IfcPhysicalQuantity} from "./IfcPhysicalQuantity.g"
import {IfcCrewResourceTypeEnum} from "./IfcCrewResourceTypeEnum.g"
import {IfcConstructionResource} from "./IfcConstructionResource.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccrewresource.htm
 */
export class IfcCrewResource extends IfcConstructionResource {
	PredefinedType : IfcCrewResourceTypeEnum // optional

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? BaseIfc.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? BaseIfc.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.ObjectType != null ? BaseIfc.toStepValue(this.ObjectType) : "$");
		parameters.push(this.Identification != null ? BaseIfc.toStepValue(this.Identification) : "$");
		parameters.push(this.LongDescription != null ? BaseIfc.toStepValue(this.LongDescription) : "$");
		parameters.push(this.Usage != null ? BaseIfc.toStepValue(this.Usage) : "$");
		parameters.push(this.BaseCosts != null ? BaseIfc.toStepValue(this.BaseCosts) : "$");
		parameters.push(this.BaseQuantity != null ? BaseIfc.toStepValue(this.BaseQuantity) : "$");
		parameters.push(BaseIfc.toStepValue(this.PredefinedType));

        return parameters.join();
    }
}