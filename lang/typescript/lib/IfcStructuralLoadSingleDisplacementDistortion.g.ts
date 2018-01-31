
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcLengthMeasure} from "./IfcLengthMeasure"
import {IfcPlaneAngleMeasure} from "./IfcPlaneAngleMeasure"
import {IfcCurvatureMeasure} from "./IfcCurvatureMeasure"
import {IfcStructuralLoadSingleDisplacement} from "./IfcStructuralLoadSingleDisplacement"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadsingledisplacementdistortion.htm
export class IfcStructuralLoadSingleDisplacementDistortion extends IfcStructuralLoadSingleDisplacement {
	Distortion : IfcCurvatureMeasure// optional

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
		parameters.push(this.Distortion != null ? this.toStepValue(this.Distortion) : "$");

        return parameters.join();
    }
}