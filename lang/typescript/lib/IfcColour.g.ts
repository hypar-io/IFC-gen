
import {Select} from "./Select"
import {IfcColourSpecification} from "./IfcColourSpecification"
import {IfcPreDefinedColour} from "./IfcPreDefinedColour"

export class IfcColour extends Select {
    value : IfcColourSpecification|IfcPreDefinedColour
}
