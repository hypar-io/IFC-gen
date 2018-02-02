
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
		parameters.push(this.SourceCRS != null ? BaseIfc.toStepValue(this.SourceCRS) : "$");
		parameters.push(this.TargetCRS != null ? BaseIfc.toStepValue(this.TargetCRS) : "$");
		parameters.push(this.Eastings != null ? BaseIfc.toStepValue(this.Eastings) : "$");
		parameters.push(this.Northings != null ? BaseIfc.toStepValue(this.Northings) : "$");
		parameters.push(this.OrthogonalHeight != null ? BaseIfc.toStepValue(this.OrthogonalHeight) : "$");
		parameters.push(this.XAxisAbscissa != null ? BaseIfc.toStepValue(this.XAxisAbscissa) : "$");
		parameters.push(this.XAxisOrdinate != null ? BaseIfc.toStepValue(this.XAxisOrdinate) : "$");
		parameters.push(this.Scale != null ? BaseIfc.toStepValue(this.Scale) : "$");

        return parameters.join();
    }
}