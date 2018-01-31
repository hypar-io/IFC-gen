
import {Select} from "./Select"
import {IfcLibraryInformation} from "./IfcLibraryInformation.g"
import {IfcLibraryReference} from "./IfcLibraryReference.g"

export class IfcLibrarySelect extends Select {
    value : IfcLibraryInformation|IfcLibraryReference
}
