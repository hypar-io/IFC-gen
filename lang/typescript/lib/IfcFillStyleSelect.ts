
import {Select} from "./Select"
import {IfcColour} from "./IfcColour"
import {IfcExternallyDefinedHatchStyle} from "./IfcExternallyDefinedHatchStyle"
import {IfcFillAreaStyleHatching} from "./IfcFillAreaStyleHatching"
import {IfcFillAreaStyleTiles} from "./IfcFillAreaStyleTiles"

export class IfcFillStyleSelect extends Select {
    value : IfcColour|IfcExternallyDefinedHatchStyle|IfcFillAreaStyleHatching|IfcFillAreaStyleTiles
}
