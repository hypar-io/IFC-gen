
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
		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.ObjectType))
		parameters.push(BaseIfc.toStepValue(this.Identification))
		parameters.push(BaseIfc.toStepValue(this.OriginalValue))
		parameters.push(BaseIfc.toStepValue(this.CurrentValue))
		parameters.push(BaseIfc.toStepValue(this.TotalReplacementCost))
		parameters.push(BaseIfc.toStepValue(this.Owner))
		parameters.push(BaseIfc.toStepValue(this.User))
		parameters.push(BaseIfc.toStepValue(this.ResponsiblePerson))
		parameters.push(BaseIfc.toStepValue(this.IncorporationDate))
		parameters.push(BaseIfc.toStepValue(this.DepreciatedValue))

        return parameters.join();
    }
}