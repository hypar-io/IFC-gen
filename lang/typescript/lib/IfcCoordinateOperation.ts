
import {BaseIfc} from "./BaseIfc"
import {IfcCoordinateReferenceSystemSelect} from "./IfcCoordinateReferenceSystemSelect"
import {IfcCoordinateReferenceSystem} from "./IfcCoordinateReferenceSystem"
import {IfcMapConversion} from "./IfcMapConversion"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccoordinateoperation.htm
export abstract class IfcCoordinateOperation extends BaseIfc {
	SourceCRS : IfcCoordinateReferenceSystemSelect
	TargetCRS : IfcCoordinateReferenceSystem

    constructor(sourceCRS : IfcCoordinateReferenceSystemSelect, targetCRS : IfcCoordinateReferenceSystem) {
        super()

		this.SourceCRS = sourceCRS
		this.TargetCRS = targetCRS

    }
}