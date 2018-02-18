
import {BaseIfc} from "./BaseIfc"
import {IfcLightDistributionCurveEnum} from "./IfcLightDistributionCurveEnum.g"
import {IfcLightDistributionData} from "./IfcLightDistributionData.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightintensitydistribution.htm
 */
export class IfcLightIntensityDistribution extends BaseIfc {
	LightDistributionCurve : IfcLightDistributionCurveEnum
	DistributionData : Array<IfcLightDistributionData>

    constructor(lightDistributionCurve : IfcLightDistributionCurveEnum, distributionData : Array<IfcLightDistributionData>) {
        super()
		this.LightDistributionCurve = lightDistributionCurve
		this.DistributionData = distributionData

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.LightDistributionCurve))
		parameters.push(BaseIfc.toStepValue(this.DistributionData))

        return parameters.join();
    }
}