
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcPhysicalComplexQuantity} from "./IfcPhysicalComplexQuantity"
import {IfcNamedUnit} from "./IfcNamedUnit"
import {IfcMassMeasure} from "./IfcMassMeasure"
import {IfcPhysicalSimpleQuantity} from "./IfcPhysicalSimpleQuantity"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcquantityweight.htm
export class IfcQuantityWeight extends IfcPhysicalSimpleQuantity {
	WeightValue : IfcMassMeasure
	Formula : IfcLabel// optional

    constructor(name : IfcLabel, weightValue : IfcMassMeasure) {
        super(name)

		this.WeightValue = weightValue

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.Unit != null ? this.toStepValue(this.Unit) : "$");
		parameters.push(this.WeightValue != null ? this.toStepValue(this.WeightValue) : "$");
		parameters.push(this.Formula != null ? this.toStepValue(this.Formula) : "$");

        return parameters.join();
    }
}