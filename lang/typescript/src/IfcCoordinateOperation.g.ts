
import {BaseIfc} from "./BaseIfc"
import {IfcCoordinateReferenceSystemSelect} from "./IfcCoordinateReferenceSystemSelect.g"
import {IfcCoordinateReferenceSystem} from "./IfcCoordinateReferenceSystem.g"
import {IfcMapConversion} from "./IfcMapConversion.g"

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