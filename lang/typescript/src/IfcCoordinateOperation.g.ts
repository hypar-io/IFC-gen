
import {BaseIfc} from "./BaseIfc"
import {IfcCoordinateReferenceSystem} from "./IfcCoordinateReferenceSystem.g"
import {IfcGeometricRepresentationContext} from "./IfcGeometricRepresentationContext.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccoordinateoperation.htm
 */
export abstract class IfcCoordinateOperation extends BaseIfc {
	SourceCRS : IfcCoordinateReferenceSystem|IfcGeometricRepresentationContext
	TargetCRS : IfcCoordinateReferenceSystem

    constructor(sourceCRS : IfcCoordinateReferenceSystem|IfcGeometricRepresentationContext, targetCRS : IfcCoordinateReferenceSystem) {
        super()
		this.SourceCRS = sourceCRS
		this.TargetCRS = targetCRS

    }
}