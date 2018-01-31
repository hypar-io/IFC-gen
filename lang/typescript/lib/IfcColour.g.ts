
import {Select} from "./Select"
import {IfcColourSpecification} from "./IfcColourSpecification.g"
import {IfcPreDefinedColour} from "./IfcPreDefinedColour.g"

export class IfcColour extends Select {
    value : IfcColourSpecification|IfcPreDefinedColour
}
