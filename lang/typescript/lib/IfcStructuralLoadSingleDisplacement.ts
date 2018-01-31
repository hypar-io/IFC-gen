
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcLengthMeasure} from "./IfcLengthMeasure"
import {IfcPlaneAngleMeasure} from "./IfcPlaneAngleMeasure"
import {IfcStructuralLoadSingleDisplacementDistortion} from "./IfcStructuralLoadSingleDisplacementDistortion"
import {IfcStructuralLoadStatic} from "./IfcStructuralLoadStatic"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadsingledisplacement.htm
export class IfcStructuralLoadSingleDisplacement extends IfcStructuralLoadStatic {
	DisplacementX : IfcLengthMeasure// optional
	DisplacementY : IfcLengthMeasure// optional
	DisplacementZ : IfcLengthMeasure// optional
	RotationalDisplacementRX : IfcPlaneAngleMeasure// optional
	RotationalDisplacementRY : IfcPlaneAngleMeasure// optional
	RotationalDisplacementRZ : IfcPlaneAngleMeasure// optional

    constructor() {
        super()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.DisplacementX != null ? this.toStepValue(this.DisplacementX) : "$");
		parameters.push(this.DisplacementY != null ? this.toStepValue(this.DisplacementY) : "$");
		parameters.push(this.DisplacementZ != null ? this.toStepValue(this.DisplacementZ) : "$");
		parameters.push(this.RotationalDisplacementRX != null ? this.toStepValue(this.RotationalDisplacementRX) : "$");
		parameters.push(this.RotationalDisplacementRY != null ? this.toStepValue(this.RotationalDisplacementRY) : "$");
		parameters.push(this.RotationalDisplacementRZ != null ? this.toStepValue(this.RotationalDisplacementRZ) : "$");

        return parameters.join();
    }
}