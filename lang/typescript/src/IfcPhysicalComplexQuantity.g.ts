
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcPhysicalQuantity} from "./IfcPhysicalQuantity.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcphysicalcomplexquantity.htm
 */
export class IfcPhysicalComplexQuantity extends IfcPhysicalQuantity {
	HasQuantities : Array<IfcPhysicalQuantity>
	Discrimination : IfcLabel
	Quality : IfcLabel // optional
	Usage : IfcLabel // optional

    constructor(name : IfcLabel, hasQuantities : Array<IfcPhysicalQuantity>, discrimination : IfcLabel) {
        super(name)
		this.HasQuantities = hasQuantities
		this.Discrimination = discrimination

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.HasQuantities))
		parameters.push(BaseIfc.toStepValue(this.Discrimination))
		parameters.push(BaseIfc.toStepValue(this.Quality))
		parameters.push(BaseIfc.toStepValue(this.Usage))

        return parameters.join();
    }
}