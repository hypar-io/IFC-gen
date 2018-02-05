
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcCartesianPointList} from "./IfcCartesianPointList.g"
import {IfcArcIndex} from "./IfcArcIndex.g"
import {IfcLineIndex} from "./IfcLineIndex.g"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcBoundedCurve} from "./IfcBoundedCurve.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcindexedpolycurve.htm
 */
export class IfcIndexedPolyCurve extends IfcBoundedCurve {
	Points : IfcCartesianPointList
	Segments : Array<IfcArcIndex|IfcLineIndex> // optional
	SelfIntersect : IfcBoolean // optional

    constructor(points : IfcCartesianPointList) {
        super()
		this.Segments = new Array<IfcArcIndex|IfcLineIndex>()

		this.Points = points

    }
    getStepParameters() : string {
            var parameters = new Array<string>();
    		parameters.push(BaseIfc.toStepValue(this.Points))
		parameters.push(BaseIfc.toStepValue(this.Segments))
		parameters.push(BaseIfc.toStepValue(this.SelfIntersect))

            return parameters.join();
        }
}