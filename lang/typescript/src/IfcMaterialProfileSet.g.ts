
import {BaseIfc} from "./BaseIfc"
import {IfcRelAssociatesMaterial} from "./IfcRelAssociatesMaterial.g"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship.g"
import {IfcMaterialProperties} from "./IfcMaterialProperties.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcMaterialProfile} from "./IfcMaterialProfile.g"
import {IfcCompositeProfileDef} from "./IfcCompositeProfileDef.g"
import {IfcMaterialDefinition} from "./IfcMaterialDefinition.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialprofileset.htm
 */
export class IfcMaterialProfileSet extends IfcMaterialDefinition {
	Name : IfcLabel // optional
	Description : IfcText // optional
	MaterialProfiles : Array<IfcMaterialProfile>
	CompositeProfile : IfcCompositeProfileDef // optional

    constructor(materialProfiles : Array<IfcMaterialProfile>) {
        super()

		this.MaterialProfiles = materialProfiles

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.MaterialProfiles != null ? BaseIfc.toStepValue(this.MaterialProfiles) : "$");
		parameters.push(this.CompositeProfile != null ? BaseIfc.toStepValue(this.CompositeProfile) : "$");

        return parameters.join();
    }
}