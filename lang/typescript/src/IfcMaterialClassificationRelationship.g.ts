
import {BaseIfc} from "./BaseIfc"
import {IfcClassification} from "./IfcClassification.g"
import {IfcClassificationReference} from "./IfcClassificationReference.g"
import {IfcMaterial} from "./IfcMaterial.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialclassificationrelationship.htm
 */
export class IfcMaterialClassificationRelationship extends BaseIfc {
	MaterialClassifications : Array<IfcClassification|IfcClassificationReference>
	ClassifiedMaterial : IfcMaterial

    constructor(materialClassifications : Array<IfcClassification|IfcClassificationReference>, classifiedMaterial : IfcMaterial) {
        super()
		this.MaterialClassifications = materialClassifications
		this.ClassifiedMaterial = classifiedMaterial

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.MaterialClassifications))
		parameters.push(BaseIfc.toStepValue(this.ClassifiedMaterial))

        return parameters.join();
    }
}