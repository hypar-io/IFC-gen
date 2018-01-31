
import {BaseIfc} from "./BaseIfc"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcAreaMeasure} from "./IfcAreaMeasure.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcReinforcingBarSurfaceEnum} from "./IfcReinforcingBarSurfaceEnum.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcCountMeasure} from "./IfcCountMeasure.g"
import {IfcPreDefinedProperties} from "./IfcPreDefinedProperties.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreinforcementbarproperties.htm
export class IfcReinforcementBarProperties extends IfcPreDefinedProperties {
	TotalCrossSectionArea : IfcAreaMeasure
	SteelGrade : IfcLabel
	BarSurface : IfcReinforcingBarSurfaceEnum// optional
	EffectiveDepth : IfcLengthMeasure// optional
	NominalBarDiameter : IfcPositiveLengthMeasure// optional
	BarCount : IfcCountMeasure// optional

    constructor(totalCrossSectionArea : IfcAreaMeasure, steelGrade : IfcLabel) {
        super()

		this.TotalCrossSectionArea = totalCrossSectionArea
		this.SteelGrade = steelGrade

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.TotalCrossSectionArea != null ? this.toStepValue(this.TotalCrossSectionArea) : "$");
		parameters.push(this.SteelGrade != null ? this.toStepValue(this.SteelGrade) : "$");
		parameters.push(this.toStepValue(this.BarSurface));
		parameters.push(this.EffectiveDepth != null ? this.toStepValue(this.EffectiveDepth) : "$");
		parameters.push(this.NominalBarDiameter != null ? this.toStepValue(this.NominalBarDiameter) : "$");
		parameters.push(this.BarCount != null ? this.toStepValue(this.BarCount) : "$");

        return parameters.join();
    }
}