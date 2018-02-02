
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcConstraint} from "./IfcConstraint.g"
import {IfcActorRole} from "./IfcActorRole.g"
import {IfcAppliedValue} from "./IfcAppliedValue.g"
import {IfcApproval} from "./IfcApproval.g"
import {IfcContextDependentUnit} from "./IfcContextDependentUnit.g"
import {IfcConversionBasedUnit} from "./IfcConversionBasedUnit.g"
import {IfcExternalInformation} from "./IfcExternalInformation.g"
import {IfcExternalReference} from "./IfcExternalReference.g"
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
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcresourceconstraintrelationship.htm
 */
export class IfcResourceConstraintRelationship extends IfcResourceLevelRelationship {
	RelatingConstraint : IfcConstraint
	RelatedResourceObjects : Array<IfcActorRole|IfcAppliedValue|IfcApproval|IfcConstraint|IfcContextDependentUnit|IfcConversionBasedUnit|IfcExternalInformation|IfcExternalReference|IfcMaterialDefinition|IfcOrganization|IfcPerson|IfcPersonAndOrganization|IfcPhysicalQuantity|IfcProfileDef|IfcPropertyAbstraction|IfcTimeSeries>

    constructor(relatingConstraint : IfcConstraint, relatedResourceObjects : Array<IfcActorRole|IfcAppliedValue|IfcApproval|IfcConstraint|IfcContextDependentUnit|IfcConversionBasedUnit|IfcExternalInformation|IfcExternalReference|IfcMaterialDefinition|IfcOrganization|IfcPerson|IfcPersonAndOrganization|IfcPhysicalQuantity|IfcProfileDef|IfcPropertyAbstraction|IfcTimeSeries>) {
        super()

		this.RelatingConstraint = relatingConstraint
		this.RelatedResourceObjects = relatedResourceObjects

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.RelatingConstraint != null ? BaseIfc.toStepValue(this.RelatingConstraint) : "$");
		parameters.push(this.RelatedResourceObjects != null ? BaseIfc.toStepValue(this.RelatedResourceObjects) : "$");

        return parameters.join();
    }
}