
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcPlaneAngleMeasure} from "./IfcPlaneAngleMeasure.g"
import {IfcStructuralLoadStatic} from "./IfcStructuralLoadStatic.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadsingledisplacement.htm
 */
export class IfcStructuralLoadSingleDisplacement extends IfcStructuralLoadStatic {
	DisplacementX : IfcLengthMeasure // optional
	DisplacementY : IfcLengthMeasure // optional
	DisplacementZ : IfcLengthMeasure // optional
	RotationalDisplacementRX : IfcPlaneAngleMeasure // optional
	RotationalDisplacementRY : IfcPlaneAngleMeasure // optional
	RotationalDisplacementRZ : IfcPlaneAngleMeasure // optional

    constructor() {
        super()

    }
    getStepParameters() : string {
            var parameters = new Array<string>();
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.DisplacementX))
		parameters.push(BaseIfc.toStepValue(this.DisplacementY))
		parameters.push(BaseIfc.toStepValue(this.DisplacementZ))
		parameters.push(BaseIfc.toStepValue(this.RotationalDisplacementRX))
		parameters.push(BaseIfc.toStepValue(this.RotationalDisplacementRY))
		parameters.push(BaseIfc.toStepValue(this.RotationalDisplacementRZ))

            return parameters.join();
        }
}