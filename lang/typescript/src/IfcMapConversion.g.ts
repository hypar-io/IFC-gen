
import {BaseIfc} from "./BaseIfc"
import {IfcCoordinateReferenceSystem} from "./IfcCoordinateReferenceSystem.g"
import {IfcGeometricRepresentationContext} from "./IfcGeometricRepresentationContext.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcReal} from "./IfcReal.g"
import {IfcCoordinateOperation} from "./IfcCoordinateOperation.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmapconversion.htm
 */
export class IfcMapConversion extends IfcCoordinateOperation {
	Eastings : IfcLengthMeasure
	Northings : IfcLengthMeasure
	OrthogonalHeight : IfcLengthMeasure
	XAxisAbscissa : IfcReal // optional
	XAxisOrdinate : IfcReal // optional
	Scale : IfcReal // optional

    constructor(sourceCRS : IfcCoordinateReferenceSystem|IfcGeometricRepresentationContext, targetCRS : IfcCoordinateReferenceSystem, eastings : IfcLengthMeasure, northings : IfcLengthMeasure, orthogonalHeight : IfcLengthMeasure) {
        super(sourceCRS,targetCRS)
		this.Eastings = eastings
		this.Northings = northings
		this.OrthogonalHeight = orthogonalHeight

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.SourceCRS))
		parameters.push(BaseIfc.toStepValue(this.TargetCRS))
		parameters.push(BaseIfc.toStepValue(this.Eastings))
		parameters.push(BaseIfc.toStepValue(this.Northings))
		parameters.push(BaseIfc.toStepValue(this.OrthogonalHeight))
		parameters.push(BaseIfc.toStepValue(this.XAxisAbscissa))
		parameters.push(BaseIfc.toStepValue(this.XAxisOrdinate))
		parameters.push(BaseIfc.toStepValue(this.Scale))

        return parameters.join();
    }
}