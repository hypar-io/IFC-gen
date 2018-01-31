
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcPhysicalQuantity} from "./IfcPhysicalQuantity"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcphysicalcomplexquantity.htm
export class IfcPhysicalComplexQuantity extends IfcPhysicalQuantity {
	HasQuantities : Array<IfcPhysicalQuantity>
	Discrimination : IfcLabel
	Quality : IfcLabel// optional
	Usage : IfcLabel// optional

    constructor(name : IfcLabel, hasQuantities : Array<IfcPhysicalQuantity>, discrimination : IfcLabel) {
        super(name)

		this.HasQuantities = hasQuantities
		this.Discrimination = discrimination

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.HasQuantities != null ? this.toStepValue(this.HasQuantities) : "$");
		parameters.push(this.Discrimination != null ? this.toStepValue(this.Discrimination) : "$");
		parameters.push(this.Quality != null ? this.toStepValue(this.Quality) : "$");
		parameters.push(this.Usage != null ? this.toStepValue(this.Usage) : "$");

        return parameters.join();
    }
}