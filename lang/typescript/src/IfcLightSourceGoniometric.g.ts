
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcColourRgb} from "./IfcColourRgb.g"
import {IfcNormalisedRatioMeasure} from "./IfcNormalisedRatioMeasure.g"
import {IfcAxis2Placement3D} from "./IfcAxis2Placement3D.g"
import {IfcThermodynamicTemperatureMeasure} from "./IfcThermodynamicTemperatureMeasure.g"
import {IfcLuminousFluxMeasure} from "./IfcLuminousFluxMeasure.g"
import {IfcLightEmissionSourceEnum} from "./IfcLightEmissionSourceEnum.g"
import {IfcExternalReference} from "./IfcExternalReference.g"
import {IfcLightIntensityDistribution} from "./IfcLightIntensityDistribution.g"
import {IfcLightSource} from "./IfcLightSource.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightsourcegoniometric.htm
 */
export class IfcLightSourceGoniometric extends IfcLightSource {
	Position : IfcAxis2Placement3D
	ColourAppearance : IfcColourRgb // optional
	ColourTemperature : IfcThermodynamicTemperatureMeasure
	LuminousFlux : IfcLuminousFluxMeasure
	LightEmissionSource : IfcLightEmissionSourceEnum
	LightDistributionDataSource : IfcExternalReference|IfcLightIntensityDistribution

    constructor(lightColour : IfcColourRgb, position : IfcAxis2Placement3D, colourTemperature : IfcThermodynamicTemperatureMeasure, luminousFlux : IfcLuminousFluxMeasure, lightEmissionSource : IfcLightEmissionSourceEnum, lightDistributionDataSource : IfcExternalReference|IfcLightIntensityDistribution) {
        super(lightColour)

		this.Position = position
		this.ColourTemperature = colourTemperature
		this.LuminousFlux = luminousFlux
		this.LightEmissionSource = lightEmissionSource
		this.LightDistributionDataSource = lightDistributionDataSource

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.LightColour != null ? BaseIfc.toStepValue(this.LightColour) : "$");
		parameters.push(this.AmbientIntensity != null ? BaseIfc.toStepValue(this.AmbientIntensity) : "$");
		parameters.push(this.Intensity != null ? BaseIfc.toStepValue(this.Intensity) : "$");
		parameters.push(this.Position != null ? BaseIfc.toStepValue(this.Position) : "$");
		parameters.push(this.ColourAppearance != null ? BaseIfc.toStepValue(this.ColourAppearance) : "$");
		parameters.push(this.ColourTemperature != null ? BaseIfc.toStepValue(this.ColourTemperature) : "$");
		parameters.push(this.LuminousFlux != null ? BaseIfc.toStepValue(this.LuminousFlux) : "$");
		parameters.push(BaseIfc.toStepValue(this.LightEmissionSource));
		parameters.push(this.LightDistributionDataSource != null ? BaseIfc.toStepValue(this.LightDistributionDataSource) : "$");

        return parameters.join();
    }
}