
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcPhysicalComplexQuantity} from "./IfcPhysicalComplexQuantity.g"
import {IfcNamedUnit} from "./IfcNamedUnit.g"
import {IfcAreaMeasure} from "./IfcAreaMeasure.g"
import {IfcPhysicalSimpleQuantity} from "./IfcPhysicalSimpleQuantity.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcquantityarea.htm
export class IfcQuantityArea extends IfcPhysicalSimpleQuantity {
	AreaValue : IfcAreaMeasure
	Formula : IfcLabel// optional

    constructor(name : IfcLabel, areaValue : IfcAreaMeasure) {
        super(name)

		this.AreaValue = areaValue

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.Unit != null ? this.toStepValue(this.Unit) : "$");
		parameters.push(this.AreaValue != null ? this.toStepValue(this.AreaValue) : "$");
		parameters.push(this.Formula != null ? this.toStepValue(this.Formula) : "$");

        return parameters.join();
    }
}