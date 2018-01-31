
import {BaseIfc} from "./BaseIfc"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcPresentationItem} from "./IfcPresentationItem.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurvestylefontpattern.htm
export class IfcCurveStyleFontPattern extends IfcPresentationItem {
	VisibleSegmentLength : IfcLengthMeasure
	InvisibleSegmentLength : IfcPositiveLengthMeasure

    constructor(visibleSegmentLength : IfcLengthMeasure, invisibleSegmentLength : IfcPositiveLengthMeasure) {
        super()

		this.VisibleSegmentLength = visibleSegmentLength
		this.InvisibleSegmentLength = invisibleSegmentLength

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.VisibleSegmentLength != null ? this.toStepValue(this.VisibleSegmentLength) : "$");
		parameters.push(this.InvisibleSegmentLength != null ? this.toStepValue(this.InvisibleSegmentLength) : "$");

        return parameters.join();
    }
}