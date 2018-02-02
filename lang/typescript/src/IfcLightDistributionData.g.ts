
import {BaseIfc} from "./BaseIfc"
import {IfcPlaneAngleMeasure} from "./IfcPlaneAngleMeasure.g"
import {IfcLuminousIntensityDistributionMeasure} from "./IfcLuminousIntensityDistributionMeasure.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightdistributiondata.htm
 */
export class IfcLightDistributionData extends BaseIfc {
	MainPlaneAngle : IfcPlaneAngleMeasure
	SecondaryPlaneAngle : Array<IfcPlaneAngleMeasure>
	LuminousIntensity : Array<IfcLuminousIntensityDistributionMeasure>

    constructor(mainPlaneAngle : IfcPlaneAngleMeasure, secondaryPlaneAngle : Array<IfcPlaneAngleMeasure>, luminousIntensity : Array<IfcLuminousIntensityDistributionMeasure>) {
        super()

		this.MainPlaneAngle = mainPlaneAngle
		this.SecondaryPlaneAngle = secondaryPlaneAngle
		this.LuminousIntensity = luminousIntensity

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.MainPlaneAngle != null ? BaseIfc.toStepValue(this.MainPlaneAngle) : "$");
		parameters.push(this.SecondaryPlaneAngle != null ? BaseIfc.toStepValue(this.SecondaryPlaneAngle) : "$");
		parameters.push(this.LuminousIntensity != null ? BaseIfc.toStepValue(this.LuminousIntensity) : "$");

        return parameters.join();
    }
}