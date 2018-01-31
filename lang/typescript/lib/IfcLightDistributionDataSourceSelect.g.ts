
import {Select} from "./Select"
import {IfcExternalReference} from "./IfcExternalReference"
import {IfcLightIntensityDistribution} from "./IfcLightIntensityDistribution"

export class IfcLightDistributionDataSourceSelect extends Select {
    value : IfcExternalReference|IfcLightIntensityDistribution
}
