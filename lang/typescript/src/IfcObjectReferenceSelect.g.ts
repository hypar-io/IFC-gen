
import {Select} from "./Select"
import {IfcAddress} from "./IfcAddress.g"
import {IfcAppliedValue} from "./IfcAppliedValue.g"
import {IfcExternalReference} from "./IfcExternalReference.g"
import {IfcMaterialDefinition} from "./IfcMaterialDefinition.g"
import {IfcOrganization} from "./IfcOrganization.g"
import {IfcPerson} from "./IfcPerson.g"
import {IfcPersonAndOrganization} from "./IfcPersonAndOrganization.g"
import {IfcTable} from "./IfcTable.g"
import {IfcTimeSeries} from "./IfcTimeSeries.g"

export class IfcObjectReferenceSelect extends Select {
    value : IfcAddress|IfcAppliedValue|IfcExternalReference|IfcMaterialDefinition|IfcOrganization|IfcPerson|IfcPersonAndOrganization|IfcTable|IfcTimeSeries
}
