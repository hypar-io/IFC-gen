
import {BaseIfc} from "./BaseIfc"
import {IfcClassificationSelect} from "./IfcClassificationSelect"
import {IfcMaterial} from "./IfcMaterial"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialclassificationrelationship.htm
export class IfcMaterialClassificationRelationship extends BaseIfc {
	MaterialClassifications : Array<IfcClassificationSelect>
	ClassifiedMaterial : IfcMaterial

    constructor(materialClassifications : Array<IfcClassificationSelect>, classifiedMaterial : IfcMaterial) {
        super()

		this.MaterialClassifications = materialClassifications
		this.ClassifiedMaterial = classifiedMaterial

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.MaterialClassifications != null ? this.toStepValue(this.MaterialClassifications) : "$");
		parameters.push(this.ClassifiedMaterial != null ? this.toStepValue(this.ClassifiedMaterial) : "$");

        return parameters.join();
    }
}