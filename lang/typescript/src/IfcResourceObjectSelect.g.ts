
import {Select} from "./Select"
import {IfcActorRole} from "./IfcActorRole.g"
import {IfcAppliedValue} from "./IfcAppliedValue.g"
import {IfcApproval} from "./IfcApproval.g"
import {IfcConstraint} from "./IfcConstraint.g"
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

export class IfcResourceObjectSelect extends Select {
    value : IfcActorRole|IfcAppliedValue|IfcApproval|IfcConstraint|IfcContextDependentUnit|IfcConversionBasedUnit|IfcExternalInformation|IfcExternalReference|IfcMaterialDefinition|IfcOrganization|IfcPerson|IfcPersonAndOrganization|IfcPhysicalQuantity|IfcProfileDef|IfcPropertyAbstraction|IfcTimeSeries
}
