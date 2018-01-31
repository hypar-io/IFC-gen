
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcRepresentation} from "./IfcRepresentation"
import {IfcMaterial} from "./IfcMaterial"
import {IfcProductRepresentation} from "./IfcProductRepresentation"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialdefinitionrepresentation.htm
export class IfcMaterialDefinitionRepresentation extends IfcProductRepresentation {
	RepresentedMaterial : IfcMaterial

    constructor(representations : Array<IfcRepresentation>, representedMaterial : IfcMaterial) {
        super(representations)

		this.RepresentedMaterial = representedMaterial

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.Representations != null ? this.toStepValue(this.Representations) : "$");
		parameters.push(this.RepresentedMaterial != null ? this.toStepValue(this.RepresentedMaterial) : "$");

        return parameters.join();
    }
}