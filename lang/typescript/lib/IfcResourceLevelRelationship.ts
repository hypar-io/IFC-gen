
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcApprovalRelationship} from "./IfcApprovalRelationship"
import {IfcCurrencyRelationship} from "./IfcCurrencyRelationship"
import {IfcDocumentInformationRelationship} from "./IfcDocumentInformationRelationship"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcMaterialRelationship} from "./IfcMaterialRelationship"
import {IfcOrganizationRelationship} from "./IfcOrganizationRelationship"
import {IfcPropertyDependencyRelationship} from "./IfcPropertyDependencyRelationship"
import {IfcResourceApprovalRelationship} from "./IfcResourceApprovalRelationship"
import {IfcResourceConstraintRelationship} from "./IfcResourceConstraintRelationship"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcresourcelevelrelationship.htm
export abstract class IfcResourceLevelRelationship extends BaseIfc {
	Name : IfcLabel// optional
	Description : IfcText// optional

    constructor() {
        super()

    }
}