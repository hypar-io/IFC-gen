
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcPhysicalComplexQuantity} from "./IfcPhysicalComplexQuantity.g"
import {IfcNamedUnit} from "./IfcNamedUnit.g"
import {IfcTimeMeasure} from "./IfcTimeMeasure.g"
import {IfcPhysicalSimpleQuantity} from "./IfcPhysicalSimpleQuantity.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcquantitytime.htm
 */
export class IfcQuantityTime extends IfcPhysicalSimpleQuantity {
	TimeValue : IfcTimeMeasure
	Formula : IfcLabel // optional

    constructor(name : IfcLabel, timeValue : IfcTimeMeasure) {
        super(name)

		this.TimeValue = timeValue

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.Unit != null ? BaseIfc.toStepValue(this.Unit) : "$");
		parameters.push(this.TimeValue != null ? BaseIfc.toStepValue(this.TimeValue) : "$");
		parameters.push(this.Formula != null ? BaseIfc.toStepValue(this.Formula) : "$");

        return parameters.join();
    }
}