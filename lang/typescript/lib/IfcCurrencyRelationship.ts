
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcMonetaryUnit} from "./IfcMonetaryUnit"
import {IfcPositiveRatioMeasure} from "./IfcPositiveRatioMeasure"
import {IfcDateTime} from "./IfcDateTime"
import {IfcLibraryInformation} from "./IfcLibraryInformation"
import {IfcResourceLevelRelationship} from "./IfcResourceLevelRelationship"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurrencyrelationship.htm
export class IfcCurrencyRelationship extends IfcResourceLevelRelationship {
	RelatingMonetaryUnit : IfcMonetaryUnit
	RelatedMonetaryUnit : IfcMonetaryUnit
	ExchangeRate : IfcPositiveRatioMeasure
	RateDateTime : IfcDateTime// optional
	RateSource : IfcLibraryInformation// optional

    constructor(relatingMonetaryUnit : IfcMonetaryUnit, relatedMonetaryUnit : IfcMonetaryUnit, exchangeRate : IfcPositiveRatioMeasure) {
        super()

		this.RelatingMonetaryUnit = relatingMonetaryUnit
		this.RelatedMonetaryUnit = relatedMonetaryUnit
		this.ExchangeRate = exchangeRate

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.RelatingMonetaryUnit != null ? this.toStepValue(this.RelatingMonetaryUnit) : "$");
		parameters.push(this.RelatedMonetaryUnit != null ? this.toStepValue(this.RelatedMonetaryUnit) : "$");
		parameters.push(this.ExchangeRate != null ? this.toStepValue(this.ExchangeRate) : "$");
		parameters.push(this.RateDateTime != null ? this.toStepValue(this.RateDateTime) : "$");
		parameters.push(this.RateSource != null ? this.toStepValue(this.RateSource) : "$");

        return parameters.join();
    }
}