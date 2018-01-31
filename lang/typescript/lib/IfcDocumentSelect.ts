
import {Select} from "./Select"
import {IfcDocumentInformation} from "./IfcDocumentInformation"
import {IfcDocumentReference} from "./IfcDocumentReference"

export class IfcDocumentSelect extends Select {
    value : IfcDocumentInformation|IfcDocumentReference
}
