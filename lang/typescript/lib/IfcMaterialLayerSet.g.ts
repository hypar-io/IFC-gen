
import {BaseIfc} from "./BaseIfc"
import {IfcRelAssociatesMaterial} from "./IfcRelAssociatesMaterial"
import {IfcExternalReferenceRelationship} from "./IfcExternalReferenceRelationship"
import {IfcMaterialProperties} from "./IfcMaterialProperties"
import {IfcMaterialLayer} from "./IfcMaterialLayer"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcLengthMeasure} from "./IfcLengthMeasure"
import {IfcMaterialDefinition} from "./IfcMaterialDefinition"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmateriallayerset.htm
export class IfcMaterialLayerSet extends IfcMaterialDefinition {
	MaterialLayers : Array<IfcMaterialLayer>
	LayerSetName : IfcLabel// optional
	Description : IfcText// optional

    get TotalThickness() : IfcLengthMeasure{throw "Derived property logic has been implemented for TotalThickness."} // derived

    constructor(materialLayers : Array<IfcMaterialLayer>) {
        super()

		this.MaterialLayers = materialLayers

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.MaterialLayers != null ? this.toStepValue(this.MaterialLayers) : "$");
		parameters.push(this.LayerSetName != null ? this.toStepValue(this.LayerSetName) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");

        return parameters.join();
    }
}