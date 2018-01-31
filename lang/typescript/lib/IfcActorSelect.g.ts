
import {Select} from "./Select"
import {IfcOrganization} from "./IfcOrganization.g"
import {IfcPerson} from "./IfcPerson.g"
import {IfcPersonAndOrganization} from "./IfcPersonAndOrganization.g"

export class IfcActorSelect extends Select {
    value : IfcOrganization|IfcPerson|IfcPersonAndOrganization
}
