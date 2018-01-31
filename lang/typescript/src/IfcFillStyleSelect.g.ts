
import {Select} from "./Select"
import {IfcColour} from "./IfcColour.g"
import {IfcExternallyDefinedHatchStyle} from "./IfcExternallyDefinedHatchStyle.g"
import {IfcFillAreaStyleHatching} from "./IfcFillAreaStyleHatching.g"
import {IfcFillAreaStyleTiles} from "./IfcFillAreaStyleTiles.g"

export class IfcFillStyleSelect extends Select {
    value : IfcColour|IfcExternallyDefinedHatchStyle|IfcFillAreaStyleHatching|IfcFillAreaStyleTiles
}
