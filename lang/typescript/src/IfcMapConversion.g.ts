
import {BaseIfc} from "./BaseIfc"
import {IfcCoordinateReferenceSystemSelect} from "./IfcCoordinateReferenceSystemSelect.g"
import {IfcCoordinateReferenceSystem} from "./IfcCoordinateReferenceSystem.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcReal} from "./IfcReal.g"
import {IfcCoordinateOperation} from "./IfcCoordinateOperation.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmapconversion.htm
export class IfcMapConversion extends IfcCoordinateOperation {
	Eastings : IfcLengthMeasure
	Northings : IfcLengthMeasure
	OrthogonalHeight : IfcLengthMeasure
	XAxisAbscissa : IfcReal// optional
	XAxisOrdinate : IfcReal// optional
	Scale : IfcReal// optional

    constructor(sourceCRS : IfcCoordinateReferenceSystemSelect, targetCRS : IfcCoordinateReferenceSystem, eastings : IfcLengthMeasure, northings : IfcLengthMeasure, orthogonalHeight : IfcLengthMeasure) {
        super(sourceCRS,targetCRS)

		this.Eastings = eastings
		this.Northings = northings
		this.OrthogonalHeight = orthogonalHeight

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.SourceCRS != null ? this.toStepValue(this.SourceCRS) : "$");
		parameters.push(this.TargetCRS != null ? this.toStepValue(this.TargetCRS) : "$");
		parameters.push(this.Eastings != null ? this.toStepValue(this.Eastings) : "$");
		parameters.push(this.Northings != null ? this.toStepValue(this.Northings) : "$");
		parameters.push(this.OrthogonalHeight != null ? this.toStepValue(this.OrthogonalHeight) : "$");
		parameters.push(this.XAxisAbscissa != null ? this.toStepValue(this.XAxisAbscissa) : "$");
		parameters.push(this.XAxisOrdinate != null ? this.toStepValue(this.XAxisOrdinate) : "$");
		parameters.push(this.Scale != null ? this.toStepValue(this.Scale) : "$");

        return parameters.join();
    }
}