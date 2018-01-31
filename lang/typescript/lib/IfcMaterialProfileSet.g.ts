
import {BaseIfc} from "./BaseIfc"
import {IfcRelAssociatesMaterial} from "./IfcRelAssociatesMaterial"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcMaterialProperties} from "./IfcMaterialProperties"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcMaterialProfile} from "./IfcMaterialProfile"
import {IfcCompositeProfileDef} from "./IfcCompositeProfileDef"
import {IfcMaterialDefinition} from "./IfcMaterialDefinition"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialprofileset.htm
export class IfcMaterialProfileSet extends IfcMaterialDefinition {
	Name : IfcLabel// optional
	Description : IfcText// optional
	MaterialProfiles : Array<IfcMaterialProfile>
	CompositeProfile : IfcCompositeProfileDef// optional

    constructor(materialProfiles : Array<IfcMaterialProfile>) {
        super()

		this.MaterialProfiles = materialProfiles

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.MaterialProfiles != null ? this.toStepValue(this.MaterialProfiles) : "$");
		parameters.push(this.CompositeProfile != null ? this.toStepValue(this.CompositeProfile) : "$");

        return parameters.join();
    }
}