
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcMonetaryUnit} from "./IfcMonetaryUnit.g"
import {IfcPositiveRatioMeasure} from "./IfcPositiveRatioMeasure.g"
import {IfcDateTime} from "./IfcDateTime.g"
import {IfcLibraryInformation} from "./IfcLibraryInformation.g"
import {IfcResourceLevelRelationship} from "./IfcResourceLevelRelationship.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurrencyrelationship.htm
 */
export class IfcCurrencyRelationship extends IfcResourceLevelRelationship {
	RelatingMonetaryUnit : IfcMonetaryUnit
	RelatedMonetaryUnit : IfcMonetaryUnit
	ExchangeRate : IfcPositiveRatioMeasure
	RateDateTime : IfcDateTime // optional
	RateSource : IfcLibraryInformation // optional

    constructor(relatingMonetaryUnit : IfcMonetaryUnit, relatedMonetaryUnit : IfcMonetaryUnit, exchangeRate : IfcPositiveRatioMeasure) {
        super()

		this.RelatingMonetaryUnit = relatingMonetaryUnit
		this.RelatedMonetaryUnit = relatedMonetaryUnit
		this.ExchangeRate = exchangeRate

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.RelatingMonetaryUnit != null ? BaseIfc.toStepValue(this.RelatingMonetaryUnit) : "$");
		parameters.push(this.RelatedMonetaryUnit != null ? BaseIfc.toStepValue(this.RelatedMonetaryUnit) : "$");
		parameters.push(this.ExchangeRate != null ? BaseIfc.toStepValue(this.ExchangeRate) : "$");
		parameters.push(this.RateDateTime != null ? BaseIfc.toStepValue(this.RateDateTime) : "$");
		parameters.push(this.RateSource != null ? BaseIfc.toStepValue(this.RateSource) : "$");

        return parameters.join();
    }
}