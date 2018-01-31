
import {Select} from "./Select"
import {IfcActorRole} from "./IfcActorRole"
import {IfcAppliedValue} from "./IfcAppliedValue"
import {IfcApproval} from "./IfcApproval"
import {IfcConstraint} from "./IfcConstraint"
import {IfcContextDependentUnit} from "./IfcContextDependentUnit"
import {IfcConversionBasedUnit} from "./IfcConversionBasedUnit"
import {IfcExternalInformation} from "./IfcExternalInformation"
import {IfcExternalReference} from "./IfcExternalReference"
import {IfcMaterialDefinition} from "./IfcMaterialDefinition"
import {IfcOrganization} from "./IfcOrganization"
import {IfcPerson} from "./IfcPerson"
import {IfcPersonAndOrganization} from "./IfcPersonAndOrganization"
import {IfcPhysicalQuantity} from "./IfcPhysicalQuantity"
import {IfcProfileDef} from "./IfcProfileDef"
import {IfcPropertyAbstraction} from "./IfcPropertyAbstraction"
import {IfcTimeSeries} from "./IfcTimeSeries"

export class IfcResourceObjectSelect extends Select {
    value : IfcActorRole|IfcAppliedValue|IfcApproval|IfcConstraint|IfcContextDependentUnit|IfcConversionBasedUnit|IfcExternalInformation|IfcExternalReference|IfcMaterialDefinition|IfcOrganization|IfcPerson|IfcPersonAndOrganization|IfcPhysicalQuantity|IfcProfileDef|IfcPropertyAbstraction|IfcTimeSeries
}
