
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcLengthMeasure} from "./IfcLengthMeasure"
import {IfcCartesianPointList} from "./IfcCartesianPointList"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccartesianpointlist3d.htm
export class IfcCartesianPointList3D extends IfcCartesianPointList {
	CoordList : Array<Array<IfcLengthMeasure>>

    constructor(coordList : Array<Array<IfcLengthMeasure>>) {
        super()

		this.CoordList = coordList

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.CoordList != null ? this.toStepValue(this.CoordList) : "$");

        return parameters.join();
    }
}