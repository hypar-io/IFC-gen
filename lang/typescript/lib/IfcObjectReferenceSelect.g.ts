
import {Select} from "./Select"
import {IfcAddress} from "./IfcAddress"
import {IfcAppliedValue} from "./IfcAppliedValue"
import {IfcExternalReference} from "./IfcExternalReference"
import {IfcMaterialDefinition} from "./IfcMaterialDefinition"
import {IfcOrganization} from "./IfcOrganization"
import {IfcPerson} from "./IfcPerson"
import {IfcPersonAndOrganization} from "./IfcPersonAndOrganization"
import {IfcTable} from "./IfcTable"
import {IfcTimeSeries} from "./IfcTimeSeries"

export class IfcObjectReferenceSelect extends Select {
    value : IfcAddress|IfcAppliedValue|IfcExternalReference|IfcMaterialDefinition|IfcOrganization|IfcPerson|IfcPersonAndOrganization|IfcTable|IfcTimeSeries
}
