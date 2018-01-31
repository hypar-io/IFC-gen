
import {Select} from "./Select"
import {IfcCoordinateReferenceSystem} from "./IfcCoordinateReferenceSystem"
import {IfcGeometricRepresentationContext} from "./IfcGeometricRepresentationContext"

export class IfcCoordinateReferenceSystemSelect extends Select {
    value : IfcCoordinateReferenceSystem|IfcGeometricRepresentationContext
}
