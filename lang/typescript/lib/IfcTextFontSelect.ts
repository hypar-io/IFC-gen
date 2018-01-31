
import {Select} from "./Select"
import {IfcExternallyDefinedTextFont} from "./IfcExternallyDefinedTextFont"
import {IfcPreDefinedTextFont} from "./IfcPreDefinedTextFont"

export class IfcTextFontSelect extends Select {
    value : IfcExternallyDefinedTextFont|IfcPreDefinedTextFont
}
