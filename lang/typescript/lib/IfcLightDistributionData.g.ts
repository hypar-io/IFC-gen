
import {BaseIfc} from "./BaseIfc"
import {IfcPlaneAngleMeasure} from "./IfcPlaneAngleMeasure"
import {IfcLuminousIntensityDistributionMeasure} from "./IfcLuminousIntensityDistributionMeasure"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightdistributiondata.htm
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
		parameters.push(this.MainPlaneAngle != null ? this.toStepValue(this.MainPlaneAngle) : "$");
		parameters.push(this.SecondaryPlaneAngle != null ? this.toStepValue(this.SecondaryPlaneAngle) : "$");
		parameters.push(this.LuminousIntensity != null ? this.toStepValue(this.LuminousIntensity) : "$");

        return parameters.join();
    }
}