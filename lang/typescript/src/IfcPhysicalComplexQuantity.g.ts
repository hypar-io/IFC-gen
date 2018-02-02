
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
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.HasQuantities != null ? BaseIfc.toStepValue(this.HasQuantities) : "$");
		parameters.push(this.Discrimination != null ? BaseIfc.toStepValue(this.Discrimination) : "$");
		parameters.push(this.Quality != null ? BaseIfc.toStepValue(this.Quality) : "$");
		parameters.push(this.Usage != null ? BaseIfc.toStepValue(this.Usage) : "$");

        return parameters.join();
    }
}