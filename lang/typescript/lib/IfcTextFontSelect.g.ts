
import {Select} from "./Select"
import {IfcExternallyDefinedTextFont} from "./IfcExternallyDefinedTextFont.g"
import {IfcPreDefinedTextFont} from "./IfcPreDefinedTextFont.g"

export class IfcTextFontSelect extends Select {
    value : IfcExternallyDefinedTextFont|IfcPreDefinedTextFont
}
