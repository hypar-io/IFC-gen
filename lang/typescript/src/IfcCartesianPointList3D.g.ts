
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcLengthMeasure} from "./IfcLengthMeasure.g"
import {IfcCartesianPointList} from "./IfcCartesianPointList.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccartesianpointlist3d.htm
 */
export class IfcCartesianPointList3D extends IfcCartesianPointList {
	CoordList : Array<Array<IfcLengthMeasure>>

    constructor(coordList : Array<Array<IfcLengthMeasure>>) {
        super()

		this.CoordList = coordList

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.CoordList != null ? BaseIfc.toStepValue(this.CoordList) : "$");

        return parameters.join();
    }
}