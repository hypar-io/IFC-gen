
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
import {IfcNonNegativeLengthMeasure} from "./IfcNonNegativeLengthMeasure"
import {IfcLengthMeasure} from "./IfcLengthMeasure"
import {IfcShapeAspect} from "./IfcShapeAspect"
import {IfcPreDefinedPropertySet} from "./IfcPreDefinedPropertySet"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdoorliningproperties.htm
export class IfcDoorLiningProperties extends IfcPreDefinedPropertySet {
	LiningDepth : IfcPositiveLengthMeasure// optional
	LiningThickness : IfcNonNegativeLengthMeasure// optional
	ThresholdDepth : IfcPositiveLengthMeasure// optional
	ThresholdThickness : IfcNonNegativeLengthMeasure// optional
	TransomThickness : IfcNonNegativeLengthMeasure// optional
	TransomOffset : IfcLengthMeasure// optional
	LiningOffset : IfcLengthMeasure// optional
	ThresholdOffset : IfcLengthMeasure// optional
	CasingThickness : IfcPositiveLengthMeasure// optional
	CasingDepth : IfcPositiveLengthMeasure// optional
	ShapeAspectStyle : IfcShapeAspect// optional
	LiningToPanelOffsetX : IfcLengthMeasure// optional
	LiningToPanelOffsetY : IfcLengthMeasure// optional

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? this.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? this.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? this.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? this.toStepValue(this.Description) : "$");
		parameters.push(this.LiningDepth != null ? this.toStepValue(this.LiningDepth) : "$");
		parameters.push(this.LiningThickness != null ? this.toStepValue(this.LiningThickness) : "$");
		parameters.push(this.ThresholdDepth != null ? this.toStepValue(this.ThresholdDepth) : "$");
		parameters.push(this.ThresholdThickness != null ? this.toStepValue(this.ThresholdThickness) : "$");
		parameters.push(this.TransomThickness != null ? this.toStepValue(this.TransomThickness) : "$");
		parameters.push(this.TransomOffset != null ? this.toStepValue(this.TransomOffset) : "$");
		parameters.push(this.LiningOffset != null ? this.toStepValue(this.LiningOffset) : "$");
		parameters.push(this.ThresholdOffset != null ? this.toStepValue(this.ThresholdOffset) : "$");
		parameters.push(this.CasingThickness != null ? this.toStepValue(this.CasingThickness) : "$");
		parameters.push(this.CasingDepth != null ? this.toStepValue(this.CasingDepth) : "$");
		parameters.push(this.ShapeAspectStyle != null ? this.toStepValue(this.ShapeAspectStyle) : "$");
		parameters.push(this.LiningToPanelOffsetX != null ? this.toStepValue(this.LiningToPanelOffsetX) : "$");
		parameters.push(this.LiningToPanelOffsetY != null ? this.toStepValue(this.LiningToPanelOffsetY) : "$");

        return parameters.join();
    }
}