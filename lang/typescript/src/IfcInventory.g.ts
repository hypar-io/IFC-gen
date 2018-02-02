
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
import {IfcRelAssignsToGroup} from "./IfcRelAssignsToGroup.g"
import {IfcInventoryTypeEnum} from "./IfcInventoryTypeEnum.g"
import {IfcOrganization} from "./IfcOrganization.g"
import {IfcPerson} from "./IfcPerson.g"
import {IfcPersonAndOrganization} from "./IfcPersonAndOrganization.g"
import {IfcDate} from "./IfcDate.g"
import {IfcCostValue} from "./IfcCostValue.g"
import {IfcGroup} from "./IfcGroup.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcinventory.htm
 */
export class IfcInventory extends IfcGroup {
	PredefinedType : IfcInventoryTypeEnum // optional
	Jurisdiction : IfcOrganization|IfcPerson|IfcPersonAndOrganization // optional
	ResponsiblePersons : Array<IfcPerson> // optional
	LastUpdateDate : IfcDate // optional
	CurrentValue : IfcCostValue // optional
	OriginalValue : IfcCostValue // optional

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)
		this.ResponsiblePersons = new Array<IfcPerson>()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? BaseIfc.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? BaseIfc.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.ObjectType != null ? BaseIfc.toStepValue(this.ObjectType) : "$");
		parameters.push(BaseIfc.toStepValue(this.PredefinedType));
		parameters.push(this.Jurisdiction != null ? BaseIfc.toStepValue(this.Jurisdiction) : "$");
		parameters.push(this.ResponsiblePersons != null ? BaseIfc.toStepValue(this.ResponsiblePersons) : "$");
		parameters.push(this.LastUpdateDate != null ? BaseIfc.toStepValue(this.LastUpdateDate) : "$");
		parameters.push(this.CurrentValue != null ? BaseIfc.toStepValue(this.CurrentValue) : "$");
		parameters.push(this.OriginalValue != null ? BaseIfc.toStepValue(this.OriginalValue) : "$");

        return parameters.join();
    }
}