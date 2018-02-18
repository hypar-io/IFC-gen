
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
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatingMonetaryUnit))
		parameters.push(BaseIfc.toStepValue(this.RelatedMonetaryUnit))
		parameters.push(BaseIfc.toStepValue(this.ExchangeRate))
		parameters.push(BaseIfc.toStepValue(this.RateDateTime))
		parameters.push(BaseIfc.toStepValue(this.RateSource))

        return parameters.join();
    }
}