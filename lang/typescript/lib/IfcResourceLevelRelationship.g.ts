
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcApprovalRelationship} from "./IfcApprovalRelationship.g"
import {IfcCurrencyRelationship} from "./IfcCurrencyRelationship.g"
import {IfcDocumentInformationRelationship} from "./IfcDocumentInformationRelationship.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcMaterialRelationship} from "./IfcMaterialRelationship.g"
import {IfcOrganizationRelationship} from "./IfcOrganizationRelationship.g"
import {IfcPropertyDependencyRelationship} from "./IfcPropertyDependencyRelationship.g"
import {IfcResourceApprovalRelationship} from "./IfcResourceApprovalRelationship.g"
import {IfcResourceConstraintRelationship} from "./IfcResourceConstraintRelationship.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcresourcelevelrelationship.htm
export abstract class IfcResourceLevelRelationship extends BaseIfc {
	Name : IfcLabel// optional
	Description : IfcText// optional

    constructor() {
        super()

    }
}