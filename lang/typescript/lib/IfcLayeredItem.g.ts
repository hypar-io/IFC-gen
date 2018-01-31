
import {Select} from "./Select"
import {IfcRepresentation} from "./IfcRepresentation.g"
import {IfcRepresentationItem} from "./IfcRepresentationItem.g"

export class IfcLayeredItem extends Select {
    value : IfcRepresentation|IfcRepresentationItem
}
