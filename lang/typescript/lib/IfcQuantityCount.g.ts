
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcPhysicalComplexQuantity} from "./IfcPhysicalComplexQuantity"
import {IfcNamedUnit} from "./IfcNamedUnit"
import {IfcCountMeasure} from "./IfcCountMeasure"
import {IfcPhysicalSimpleQuantity} from "./IfcPhysicalSimpleQuantity"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcquantitycount.htm
export class IfcQuantityCount extends IfcPhysicalSimpleQuantity {
	CountValue : IfcCountMeasure
	Formula : IfcLabel// optional

    constructor(name : IfcLabel, countValue : IfcCountMeasure) {
        super(name)

		this.CountValue = countValue

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.Unit != null ? this.toStepValue(this.Unit) : "$");
		parameters.push(this.CountValue != null ? this.toStepValue(this.CountValue) : "$");
		parameters.push(this.Formula != null ? this.toStepValue(this.Formula) : "$");

        return parameters.join();
    }
}