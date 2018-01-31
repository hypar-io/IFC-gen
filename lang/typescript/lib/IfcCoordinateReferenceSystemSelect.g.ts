
import {Select} from "./Select"
import {IfcCoordinateReferenceSystem} from "./IfcCoordinateReferenceSystem.g"
import {IfcGeometricRepresentationContext} from "./IfcGeometricRepresentationContext.g"

export class IfcCoordinateReferenceSystemSelect extends Select {
    value : IfcCoordinateReferenceSystem|IfcGeometricRepresentationContext
}
