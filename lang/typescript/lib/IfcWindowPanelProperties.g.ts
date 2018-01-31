
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
import {IfcWindowPanelOperationEnum} from "./IfcWindowPanelOperationEnum"
import {IfcWindowPanelPositionEnum} from "./IfcWindowPanelPositionEnum"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure"
import {IfcShapeAspect} from "./IfcShapeAspect"
import {IfcPreDefinedPropertySet} from "./IfcPreDefinedPropertySet"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcwindowpanelproperties.htm
export class IfcWindowPanelProperties extends IfcPreDefinedPropertySet {
	OperationType : IfcWindowPanelOperationEnum
	PanelPosition : IfcWindowPanelPositionEnum
	FrameDepth : IfcPositiveLengthMeasure// optional
	FrameThickness : IfcPositiveLengthMeasure// optional
	ShapeAspectStyle : IfcShapeAspect// optional

    constructor(globalId : IfcGloballyUniqueId, operationType : IfcWindowPanelOperationEnum, panelPosition : IfcWindowPanelPositionEnum) {
        super(globalId)

		this.OperationType = operationType
		this.PanelPosition = panelPosition

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.toStepValue(this.OperationType));
		parameters.push(this.toStepValue(this.PanelPosition));
		parameters.push(this.FrameDepth != null ? this.toStepValue(this.FrameDepth) : "$");
		parameters.push(this.FrameThickness != null ? this.toStepValue(this.FrameThickness) : "$");
		parameters.push(this.ShapeAspectStyle != null ? this.toStepValue(this.ShapeAspectStyle) : "$");

        return parameters.join();
    }
}