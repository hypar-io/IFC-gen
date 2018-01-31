
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment"
import {IfcStyledItem} from "./IfcStyledItem"
import {IfcCartesianPointList3D} from "./IfcCartesianPointList3D"
import {IfcDimensionCount} from "./IfcDimensionCount"
import {IfcIndexedColourMap} from "./IfcIndexedColourMap"
import {IfcIndexedTextureMap} from "./IfcIndexedTextureMap"
import {IfcPolygonalFaceSet} from "./IfcPolygonalFaceSet"
import {IfcTriangulatedFaceSet} from "./IfcTriangulatedFaceSet"
import {IfcTessellatedItem} from "./IfcTessellatedItem"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctessellatedfaceset.htm
export abstract class IfcTessellatedFaceSet extends IfcTessellatedItem {
	Coordinates : IfcCartesianPointList3D

    get Dim() : IfcDimensionCount{throw "Derived property logic has been implemented for Dim."} // derived
	HasColours : Array<IfcIndexedColourMap>// inverse
	HasTextures : Array<IfcIndexedTextureMap>// inverse

    constructor(coordinates : IfcCartesianPointList3D) {
        super()
		this.HasColours = new Array<IfcIndexedColourMap>()
		this.HasTextures = new Array<IfcIndexedTextureMap>()

		this.Coordinates = coordinates

    }
}