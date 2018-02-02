
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
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcCostValue} from "./IfcCostValue.g"
import {IfcOrganization} from "./IfcOrganization.g"
import {IfcPerson} from "./IfcPerson.g"
import {IfcPersonAndOrganization} from "./IfcPersonAndOrganization.g"
import {IfcDate} from "./IfcDate.g"
import {IfcGroup} from "./IfcGroup.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcasset.htm
 */
export class IfcAsset extends IfcGroup {
	Identification : IfcIdentifier // optional
	OriginalValue : IfcCostValue // optional
	CurrentValue : IfcCostValue // optional
	TotalReplacementCost : IfcCostValue // optional
	Owner : IfcOrganization|IfcPerson|IfcPersonAndOrganization // optional
	User : IfcOrganization|IfcPerson|IfcPersonAndOrganization // optional
	ResponsiblePerson : IfcPerson // optional
	IncorporationDate : IfcDate // optional
	DepreciatedValue : IfcCostValue // optional

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
		parameters.push(this.OriginalValue != null ? BaseIfc.toStepValue(this.OriginalValue) : "$");
		parameters.push(this.CurrentValue != null ? BaseIfc.toStepValue(this.CurrentValue) : "$");
		parameters.push(this.TotalReplacementCost != null ? BaseIfc.toStepValue(this.TotalReplacementCost) : "$");
		parameters.push(this.Owner != null ? BaseIfc.toStepValue(this.Owner) : "$");
		parameters.push(this.User != null ? BaseIfc.toStepValue(this.User) : "$");
		parameters.push(this.ResponsiblePerson != null ? BaseIfc.toStepValue(this.ResponsiblePerson) : "$");
		parameters.push(this.IncorporationDate != null ? BaseIfc.toStepValue(this.IncorporationDate) : "$");
		parameters.push(this.DepreciatedValue != null ? BaseIfc.toStepValue(this.DepreciatedValue) : "$");

        return parameters.join();
    }
}