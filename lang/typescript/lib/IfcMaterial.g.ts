
import {BaseIfc} from "./BaseIfc"
import {IfcRelAssociatesMaterial} from "./IfcRelAssociatesMaterial"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcMaterialProperties} from "./IfcMaterialProperties"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcMaterialDefinitionRepresentation} from "./IfcMaterialDefinitionRepresentation"
import {IfcMaterialRelationship} from "./IfcMaterialRelationship"
import {IfcMaterialDefinition} from "./IfcMaterialDefinition"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterial.htm
export class IfcMaterial extends IfcMaterialDefinition {
	Name : IfcLabel
	Description : IfcText// optional
	Category : IfcLabel// optional
	HasRepresentation : Array<IfcMaterialDefinitionRepresentation>// inverse
	IsRelatedWith : Array<IfcMaterialRelationship>// inverse
	RelatesTo : Array<IfcMaterialRelationship>// inverse

    constructor(name : IfcLabel) {
        super()
		this.HasRepresentation = new Array<IfcMaterialDefinitionRepresentation>()
		this.IsRelatedWith = new Array<IfcMaterialRelationship>()
		this.RelatesTo = new Array<IfcMaterialRelationship>()

		this.Name = name

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.Category != null ? this.toStepValue(this.Category) : "$");

        return parameters.join();
    }
}