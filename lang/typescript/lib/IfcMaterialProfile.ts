
import {BaseIfc} from "./BaseIfc"
import {IfcRelAssociatesMaterial} from "./IfcRelAssociatesMaterial"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcMaterialProperties} from "./IfcMaterialProperties"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcMaterial} from "./IfcMaterial"
import {IfcProfileDef} from "./IfcProfileDef"
import {IfcInteger} from "./IfcInteger"
import {IfcMaterialProfileSet} from "./IfcMaterialProfileSet"
import {IfcMaterialProfileWithOffsets} from "./IfcMaterialProfileWithOffsets"
import {IfcMaterialDefinition} from "./IfcMaterialDefinition"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialprofile.htm
export class IfcMaterialProfile extends IfcMaterialDefinition {
	Name : IfcLabel// optional
	Description : IfcText// optional
	Material : IfcMaterial// optional
	Profile : IfcProfileDef
	Priority : IfcInteger// optional
	Category : IfcLabel// optional
	ToMaterialProfileSet : IfcMaterialProfileSet// inverse

    constructor(profile : IfcProfileDef) {
        super()

		this.Profile = profile

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.Material != null ? this.toStepValue(this.Material) : "$");
		parameters.push(this.Profile != null ? this.toStepValue(this.Profile) : "$");
		parameters.push(this.Priority != null ? this.toStepValue(this.Priority) : "$");
		parameters.push(this.Category != null ? this.toStepValue(this.Category) : "$");

        return parameters.join();
    }
}