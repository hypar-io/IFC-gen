
import {Select} from "./Select"
import {IfcDocumentInformation} from "./IfcDocumentInformation.g"
import {IfcDocumentReference} from "./IfcDocumentReference.g"

export class IfcDocumentSelect extends Select {
    value : IfcDocumentInformation|IfcDocumentReference
}
