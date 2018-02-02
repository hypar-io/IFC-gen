
import {BaseIfc} from "./BaseIfc"
import {IfcPresentationLayerAssignment} from "./IfcPresentationLayerAssignment.g"
import {IfcStyledItem} from "./IfcStyledItem.g"
import {IfcCartesianPointList3D} from "./IfcCartesianPointList3D.g"
import {IfcDimensionCount} from "./IfcDimensionCount.g"
import {IfcIndexedColourMap} from "./IfcIndexedColourMap.g"
import {IfcIndexedTextureMap} from "./IfcIndexedTextureMap.g"
import {IfcTessellatedItem} from "./IfcTessellatedItem.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctessellatedfaceset.htm
 */
export abstract class IfcTessellatedFaceSet extends IfcTessellatedItem {
	Coordinates : IfcCartesianPointList3D

    get Dim() : IfcDimensionCount{throw "Derived property logic has not been implemented for Dim."} // derived
    set Dim(value : IfcDimensionCount){super.Dim = value}
	HasColours : Array<IfcIndexedColourMap> // inverse
	HasTextures : Array<IfcIndexedTextureMap> // inverse

    constructor(coordinates : IfcCartesianPointList3D) {
        super()
		this.HasColours = new Array<IfcIndexedColourMap>()
		this.HasTextures = new Array<IfcIndexedTextureMap>()

		this.Coordinates = coordinates

    }
}