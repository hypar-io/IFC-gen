
import {Select} from "./Select"
import {IfcExternalReference} from "./IfcExternalReference.g"
import {IfcLightIntensityDistribution} from "./IfcLightIntensityDistribution.g"

export class IfcLightDistributionDataSourceSelect extends Select {
    value : IfcExternalReference|IfcLightIntensityDistribution
}
