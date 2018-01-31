
import {BaseIfc} from "./BaseIfc"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcDateTime} from "./IfcDateTime.g"
import {IfcActorSelect} from "./IfcActorSelect.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcRelAssociatesApproval} from "./IfcRelAssociatesApproval.g"
import {IfcResourceApprovalRelationship} from "./IfcResourceApprovalRelationship.g"
import {IfcApprovalRelationship} from "./IfcApprovalRelationship.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcapproval.htm
export class IfcApproval extends BaseIfc {
	Identifier : IfcIdentifier// optional
	Name : IfcLabel// optional
	Description : IfcText// optional
	TimeOfApproval : IfcDateTime// optional
	Status : IfcLabel// optional
	Level : IfcLabel// optional
	Qualifier : IfcText// optional
	RequestingApproval : IfcActorSelect// optional
	GivingApproval : IfcActorSelect// optional
	HasExternalReferences : Array<IfcExternalReferenceRelationship>// inverse
	ApprovedObjects : Array<IfcRelAssociatesApproval>// inverse
	ApprovedResources : Array<IfcResourceApprovalRelationship>// inverse
	IsRelatedWith : Array<IfcApprovalRelationship>// inverse
	Relates : Array<IfcApprovalRelationship>// inverse

    constructor() {
        super()
		this.HasExternalReferences = new Array<IfcExternalReferenceRelationship>()
		this.ApprovedObjects = new Array<IfcRelAssociatesApproval>()
		this.ApprovedResources = new Array<IfcResourceApprovalRelationship>()
		this.IsRelatedWith = new Array<IfcApprovalRelationship>()
		this.Relates = new Array<IfcApprovalRelationship>()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Identifier != null ? this.toStepValue(this.Identifier) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.TimeOfApproval != null ? this.toStepValue(this.TimeOfApproval) : "$");
		parameters.push(this.Status != null ? this.toStepValue(this.Status) : "$");
		parameters.push(this.Level != null ? this.toStepValue(this.Level) : "$");
		parameters.push(this.Qualifier != null ? this.toStepValue(this.Qualifier) : "$");
		parameters.push(this.RequestingApproval != null ? this.toStepValue(this.RequestingApproval) : "$");
		parameters.push(this.GivingApproval != null ? this.toStepValue(this.GivingApproval) : "$");

        return parameters.join();
    }
}