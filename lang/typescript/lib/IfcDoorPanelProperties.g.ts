
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId"
import {IfcOwnerHistory} from "./IfcOwnerHistory"
import {IfcLabel} from "./IfcLabel"
import {IfcText} from "./IfcText"
import {IfcRelDeclares} from "./IfcRelDeclares"
import {IfcRelAssociates} from "./IfcRelAssociates"
import {IfcTypeObject} from "./IfcTypeObject"
import {IfcRelDefinesByTemplate} from "./IfcRelDefinesByTemplate"
import {IfcRelDefinesByProperties} from "./IfcRelDefinesByProperties"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure"
import {IfcDoorPanelOperationEnum} from "./IfcDoorPanelOperationEnum"
import {IfcNormalisedRatioMeasure} from "./IfcNormalisedRatioMeasure"
import {IfcDoorPanelPositionEnum} from "./IfcDoorPanelPositionEnum"
import {IfcShapeAspect} from "./IfcShapeAspect"
import {IfcPreDefinedPropertySet} from "./IfcPreDefinedPropertySet"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdoorpanelproperties.htm
export class IfcDoorPanelProperties extends IfcPreDefinedPropertySet {
	PanelDepth : IfcPositiveLengthMeasure// optional
	PanelOperation : IfcDoorPanelOperationEnum
	PanelWidth : IfcNormalisedRatioMeasure// optional
	PanelPosition : IfcDoorPanelPositionEnum
	ShapeAspectStyle : IfcShapeAspect// optional

    constructor(globalId : IfcGloballyUniqueId, panelOperation : IfcDoorPanelOperationEnum, panelPosition : IfcDoorPanelPositionEnum) {
        super(globalId)

		this.PanelOperation = panelOperation
		this.PanelPosition = panelPosition

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.PanelDepth != null ? this.toStepValue(this.PanelDepth) : "$");
		parameters.push(this.toStepValue(this.PanelOperation));
		parameters.push(this.PanelWidth != null ? this.toStepValue(this.PanelWidth) : "$");
		parameters.push(this.toStepValue(this.PanelPosition));
		parameters.push(this.ShapeAspectStyle != null ? this.toStepValue(this.ShapeAspectStyle) : "$");

        return parameters.join();
    }
}