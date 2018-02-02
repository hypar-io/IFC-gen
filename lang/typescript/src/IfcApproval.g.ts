
import {BaseIfc} from "./BaseIfc"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcDateTime} from "./IfcDateTime.g"
import {IfcOrganization} from "./IfcOrganization.g"
import {IfcPerson} from "./IfcPerson.g"
import {IfcPersonAndOrganization} from "./IfcPersonAndOrganization.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcRelAssociatesApproval} from "./IfcRelAssociatesApproval.g"
import {IfcResourceApprovalRelationship} from "./IfcResourceApprovalRelationship.g"
import {IfcApprovalRelationship} from "./IfcApprovalRelationship.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcapproval.htm
 */
export class IfcApproval extends BaseIfc {
	Identifier : IfcIdentifier // optional
	Name : IfcLabel // optional
	Description : IfcText // optional
	TimeOfApproval : IfcDateTime // optional
	Status : IfcLabel // optional
	Level : IfcLabel // optional
	Qualifier : IfcText // optional
	RequestingApproval : IfcOrganization|IfcPerson|IfcPersonAndOrganization // optional
	GivingApproval : IfcOrganization|IfcPerson|IfcPersonAndOrganization // optional
	HasExternalReferences : Array<IfcExternalReferenceRelationship> // inverse
	ApprovedObjects : Array<IfcRelAssociatesApproval> // inverse
	ApprovedResources : Array<IfcResourceApprovalRelationship> // inverse
	IsRelatedWith : Array<IfcApprovalRelationship> // inverse
	Relates : Array<IfcApprovalRelationship> // inverse

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
		parameters.push(this.Identifier != null ? BaseIfc.toStepValue(this.Identifier) : "$");
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.TimeOfApproval != null ? BaseIfc.toStepValue(this.TimeOfApproval) : "$");
		parameters.push(this.Status != null ? BaseIfc.toStepValue(this.Status) : "$");
		parameters.push(this.Level != null ? BaseIfc.toStepValue(this.Level) : "$");
		parameters.push(this.Qualifier != null ? BaseIfc.toStepValue(this.Qualifier) : "$");
		parameters.push(this.RequestingApproval != null ? BaseIfc.toStepValue(this.RequestingApproval) : "$");
		parameters.push(this.GivingApproval != null ? BaseIfc.toStepValue(this.GivingApproval) : "$");

        return parameters.join();
    }
}