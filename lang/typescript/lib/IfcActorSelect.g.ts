
import {Select} from "./Select"
import {IfcOrganization} from "./IfcOrganization"
import {IfcPerson} from "./IfcPerson"
import {IfcPersonAndOrganization} from "./IfcPersonAndOrganization"

export class IfcActorSelect extends Select {
    value : IfcOrganization|IfcPerson|IfcPersonAndOrganization
}
