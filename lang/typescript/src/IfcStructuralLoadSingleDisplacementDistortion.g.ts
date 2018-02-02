
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcPlaneAngleMeasure} from "./IfcPlaneAngleMeasure.g"
import {IfcCurvatureMeasure} from "./IfcCurvatureMeasure.g"
import {IfcStructuralLoadSingleDisplacement} from "./IfcStructuralLoadSingleDisplacement.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadsingledisplacementdistortion.htm
 */
export class IfcStructuralLoadSingleDisplacementDistortion extends IfcStructuralLoadSingleDisplacement {
	Distortion : IfcCurvatureMeasure // optional

    constructor() {
        super()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.DisplacementX != null ? BaseIfc.toStepValue(this.DisplacementX) : "$");
		parameters.push(this.DisplacementY != null ? BaseIfc.toStepValue(this.DisplacementY) : "$");
		parameters.push(this.DisplacementZ != null ? BaseIfc.toStepValue(this.DisplacementZ) : "$");
		parameters.push(this.RotationalDisplacementRX != null ? BaseIfc.toStepValue(this.RotationalDisplacementRX) : "$");
		parameters.push(this.RotationalDisplacementRY != null ? BaseIfc.toStepValue(this.RotationalDisplacementRY) : "$");
		parameters.push(this.RotationalDisplacementRZ != null ? BaseIfc.toStepValue(this.RotationalDisplacementRZ) : "$");
		parameters.push(this.Distortion != null ? BaseIfc.toStepValue(this.Distortion) : "$");

        return parameters.join();
    }
}