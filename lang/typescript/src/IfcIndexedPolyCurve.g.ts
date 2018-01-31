
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcCartesianPointList} from "./IfcCartesianPointList.g"
import {IfcSegmentIndexSelect} from "./IfcSegmentIndexSelect.g"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcBoundedCurve} from "./IfcBoundedCurve.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcindexedpolycurve.htm
export class IfcIndexedPolyCurve extends IfcBoundedCurve {
	Points : IfcCartesianPointList
	Segments : Array<IfcSegmentIndexSelect>// optional
	SelfIntersect : IfcBoolean// optional

    constructor(points : IfcCartesianPointList) {
        super()
		this.Segments = new Array<IfcSegmentIndexSelect>()

		this.Points = points

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Points != null ? this.toStepValue(this.Points) : "$");
		parameters.push(this.Segments != null ? this.toStepValue(this.Segments) : "$");
		parameters.push(this.SelfIntersect != null ? this.toStepValue(this.SelfIntersect) : "$");

        return parameters.join();
    }
}