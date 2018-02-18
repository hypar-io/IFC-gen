
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcPhysicalComplexQuantity} from "./IfcPhysicalComplexQuantity.g"
import {IfcNamedUnit} from "./IfcNamedUnit.g"
import {IfcAreaMeasure} from "./IfcAreaMeasure.g"
import {IfcPhysicalSimpleQuantity} from "./IfcPhysicalSimpleQuantity.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcquantityarea.htm
 */
export class IfcQuantityArea extends IfcPhysicalSimpleQuantity {
	AreaValue : IfcAreaMeasure
	Formula : IfcLabel // optional

    constructor(name : IfcLabel, areaValue : IfcAreaMeasure) {
        super(name)

		this.AreaValue = areaValue

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.Unit))
		parameters.push(BaseIfc.toStepValue(this.AreaValue))
		parameters.push(BaseIfc.toStepValue(this.Formula))

        return parameters.join();
    }
}