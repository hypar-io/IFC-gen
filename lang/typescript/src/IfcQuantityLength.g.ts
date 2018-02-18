
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcPhysicalComplexQuantity} from "./IfcPhysicalComplexQuantity.g"
import {IfcNamedUnit} from "./IfcNamedUnit.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcPhysicalSimpleQuantity} from "./IfcPhysicalSimpleQuantity.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcquantitylength.htm
 */
export class IfcQuantityLength extends IfcPhysicalSimpleQuantity {
	LengthValue : IfcLengthMeasure
	Formula : IfcLabel // optional

    constructor(name : IfcLabel, lengthValue : IfcLengthMeasure) {
        super(name)
		this.LengthValue = lengthValue

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.Unit))
		parameters.push(BaseIfc.toStepValue(this.LengthValue))
		parameters.push(BaseIfc.toStepValue(this.Formula))

        return parameters.join();
    }
}