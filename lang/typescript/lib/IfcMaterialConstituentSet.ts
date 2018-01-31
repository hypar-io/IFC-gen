
import {BaseIfc} from "./BaseIfc"
import {IfcRelAssociatesMaterial} from "./IfcRelAssociatesMaterial"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcMaterialProperties} from "./IfcMaterialProperties"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcMaterialConstituent} from "./IfcMaterialConstituent"
import {IfcMaterialDefinition} from "./IfcMaterialDefinition"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialconstituentset.htm
export class IfcMaterialConstituentSet extends IfcMaterialDefinition {
	Name : IfcLabel// optional
	Description : IfcText// optional
	MaterialConstituents : Array<IfcMaterialConstituent>// optional

    constructor() {
        super()
		this.MaterialConstituents = new Array<IfcMaterialConstituent>()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.MaterialConstituents != null ? this.toStepValue(this.MaterialConstituents) : "$");

        return parameters.join();
    }
}