
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcRelDeclares} from "./IfcRelDeclares.g"
import {IfcRelAssociates} from "./IfcRelAssociates.g"
import {IfcTypeObject} from "./IfcTypeObject.g"
import {IfcRelDefinesByTemplate} from "./IfcRelDefinesByTemplate.g"
import {IfcRelDefinesByProperties} from "./IfcRelDefinesByProperties.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcNonNegativeLengthMeasure} from "./IfcNonNegativeLengthMeasure.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcShapeAspect} from "./IfcShapeAspect.g"
import {IfcPreDefinedPropertySet} from "./IfcPreDefinedPropertySet.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdoorliningproperties.htm
 */
export class IfcDoorLiningProperties extends IfcPreDefinedPropertySet {
	LiningDepth : IfcPositiveLengthMeasure // optional
	LiningThickness : IfcNonNegativeLengthMeasure // optional
	ThresholdDepth : IfcPositiveLengthMeasure // optional
	ThresholdThickness : IfcNonNegativeLengthMeasure // optional
	TransomThickness : IfcNonNegativeLengthMeasure // optional
	TransomOffset : IfcLengthMeasure // optional
	LiningOffset : IfcLengthMeasure // optional
	ThresholdOffset : IfcLengthMeasure // optional
	CasingThickness : IfcPositiveLengthMeasure // optional
	CasingDepth : IfcPositiveLengthMeasure // optional
	ShapeAspectStyle : IfcShapeAspect // optional
	LiningToPanelOffsetX : IfcLengthMeasure // optional
	LiningToPanelOffsetY : IfcLengthMeasure // optional

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? BaseIfc.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? BaseIfc.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.LiningDepth != null ? BaseIfc.toStepValue(this.LiningDepth) : "$");
		parameters.push(this.LiningThickness != null ? BaseIfc.toStepValue(this.LiningThickness) : "$");
		parameters.push(this.ThresholdDepth != null ? BaseIfc.toStepValue(this.ThresholdDepth) : "$");
		parameters.push(this.ThresholdThickness != null ? BaseIfc.toStepValue(this.ThresholdThickness) : "$");
		parameters.push(this.TransomThickness != null ? BaseIfc.toStepValue(this.TransomThickness) : "$");
		parameters.push(this.TransomOffset != null ? BaseIfc.toStepValue(this.TransomOffset) : "$");
		parameters.push(this.LiningOffset != null ? BaseIfc.toStepValue(this.LiningOffset) : "$");
		parameters.push(this.ThresholdOffset != null ? BaseIfc.toStepValue(this.ThresholdOffset) : "$");
		parameters.push(this.CasingThickness != null ? BaseIfc.toStepValue(this.CasingThickness) : "$");
		parameters.push(this.CasingDepth != null ? BaseIfc.toStepValue(this.CasingDepth) : "$");
		parameters.push(this.ShapeAspectStyle != null ? BaseIfc.toStepValue(this.ShapeAspectStyle) : "$");
		parameters.push(this.LiningToPanelOffsetX != null ? BaseIfc.toStepValue(this.LiningToPanelOffsetX) : "$");
		parameters.push(this.LiningToPanelOffsetY != null ? BaseIfc.toStepValue(this.LiningToPanelOffsetY) : "$");

        return parameters.join();
    }
}