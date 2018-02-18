
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcExternalReference} from "./IfcExternalReference.g"
import {IfcActorRole} from "./IfcActorRole.g"
import {IfcAppliedValue} from "./IfcAppliedValue.g"
import {IfcApproval} from "./IfcApproval.g"
import {IfcConstraint} from "./IfcConstraint.g"
import {IfcContextDependentUnit} from "./IfcContextDependentUnit.g"
import {IfcConversionBasedUnit} from "./IfcConversionBasedUnit.g"
import {IfcExternalInformation} from "./IfcExternalInformation.g"
import {IfcMaterialDefinition} from "./IfcMaterialDefinition.g"
import {IfcOrganization} from "./IfcOrganization.g"
import {IfcPerson} from "./IfcPerson.g"
import {IfcPersonAndOrganization} from "./IfcPersonAndOrganization.g"
import {IfcPhysicalQuantity} from "./IfcPhysicalQuantity.g"
import {IfcProfileDef} from "./IfcProfileDef.g"
import {IfcPropertyAbstraction} from "./IfcPropertyAbstraction.g"
import {IfcTimeSeries} from "./IfcTimeSeries.g"
import {IfcResourceLevelRelationship} from "./IfcResourceLevelRelationship.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcexternalreferencerelationship.htm
 */
export class IfcExternalReferenceRelationship extends IfcResourceLevelRelationship {
	RelatingReference : IfcExternalReference
	RelatedResourceObjects : Array<IfcActorRole|IfcAppliedValue|IfcApproval|IfcConstraint|IfcContextDependentUnit|IfcConversionBasedUnit|IfcExternalInformation|IfcExternalReference|IfcMaterialDefinition|IfcOrganization|IfcPerson|IfcPersonAndOrganization|IfcPhysicalQuantity|IfcProfileDef|IfcPropertyAbstraction|IfcTimeSeries>

    constructor(relatingReference : IfcExternalReference, relatedResourceObjects : Array<IfcActorRole|IfcAppliedValue|IfcApproval|IfcConstraint|IfcContextDependentUnit|IfcConversionBasedUnit|IfcExternalInformation|IfcExternalReference|IfcMaterialDefinition|IfcOrganization|IfcPerson|IfcPersonAndOrganization|IfcPhysicalQuantity|IfcProfileDef|IfcPropertyAbstraction|IfcTimeSeries>) {
        super()

		this.RelatingReference = relatingReference
		this.RelatedResourceObjects = relatedResourceObjects

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatingReference))
		parameters.push(BaseIfc.toStepValue(this.RelatedResourceObjects))

        return parameters.join();
    }
}