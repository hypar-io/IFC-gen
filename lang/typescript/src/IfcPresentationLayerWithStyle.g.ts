
import {BaseIfc} from "./BaseIfc"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcRepresentation} from "./IfcRepresentation.g"
import {IfcRepresentationItem} from "./IfcRepresentationItem.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcLogical} from "./IfcLogical.g"
import {IfcPresentationStyle} from "./IfcPresentationStyle.g"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpresentationlayerwithstyle.htm
 */
export class IfcPresentationLayerWithStyle extends IfcPresentationLayerAssignment {
	LayerOn : IfcLogical
	LayerFrozen : IfcLogical
	LayerBlocked : IfcLogical
	LayerStyles : Array<IfcPresentationStyle>

    constructor(name : IfcLabel, assignedItems : Array<IfcRepresentation|IfcRepresentationItem>, layerOn : IfcLogical, layerFrozen : IfcLogical, layerBlocked : IfcLogical, layerStyles : Array<IfcPresentationStyle>) {
        super(name,assignedItems)

		this.LayerOn = layerOn
		this.LayerFrozen = layerFrozen
		this.LayerBlocked = layerBlocked
		this.LayerStyles = layerStyles

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.AssignedItems != null ? BaseIfc.toStepValue(this.AssignedItems) : "$");
		parameters.push(this.Identifier != null ? BaseIfc.toStepValue(this.Identifier) : "$");
		parameters.push(this.LayerOn != null ? BaseIfc.toStepValue(this.LayerOn) : "$");
		parameters.push(this.LayerFrozen != null ? BaseIfc.toStepValue(this.LayerFrozen) : "$");
		parameters.push(this.LayerBlocked != null ? BaseIfc.toStepValue(this.LayerBlocked) : "$");
		parameters.push(this.LayerStyles != null ? BaseIfc.toStepValue(this.LayerStyles) : "$");

        return parameters.join();
    }
}