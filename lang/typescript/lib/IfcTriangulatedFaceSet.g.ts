
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcCartesianPointList3D} from "./IfcCartesianPointList3D.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcIndexedColourMap} from "./IfcIndexedColourMap.g"
import {IfcIndexedTextureMap} from "./IfcIndexedTextureMap.g"
import {IfcParameterValue} from "./IfcParameterValue.g"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcPositiveInteger} from "./IfcPositiveInteger.g"
import {IfcInteger} from "./IfcInteger.g"
import {IfcTessellatedFaceSet} from "./IfcTessellatedFaceSet.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctriangulatedfaceset.htm
export class IfcTriangulatedFaceSet extends IfcTessellatedFaceSet {
	Normals : Array<Array<IfcParameterValue>>// optional
	Closed : IfcBoolean// optional
	CoordIndex : Array<Array<IfcPositiveInteger>>
	PnIndex : Array<IfcPositiveInteger>// optional

    get NumberOfTriangles() : IfcInteger{throw "Derived property logic has been implemented for NumberOfTriangles."} // derived

    constructor(coordinates : IfcCartesianPointList3D, coordIndex : Array<Array<IfcPositiveInteger>>) {
        super(coordinates)
		this.Normals = new Array<Array<IfcParameterValue>>()
		this.PnIndex = new Array<IfcPositiveInteger>()

		this.CoordIndex = coordIndex

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Coordinates != null ? this.toStepValue(this.Coordinates) : "$");
		parameters.push(this.Normals != null ? this.toStepValue(this.Normals) : "$");
		parameters.push(this.Closed != null ? this.toStepValue(this.Closed) : "$");
		parameters.push(this.CoordIndex != null ? this.toStepValue(this.CoordIndex) : "$");
		parameters.push(this.PnIndex != null ? this.toStepValue(this.PnIndex) : "$");

        return parameters.join();
    }
}