
import {Select} from "./Select"
import {IfcLibraryInformation} from "./IfcLibraryInformation"
import {IfcLibraryReference} from "./IfcLibraryReference"

export class IfcLibrarySelect extends Select {
    value : IfcLibraryInformation|IfcLibraryReference
}
