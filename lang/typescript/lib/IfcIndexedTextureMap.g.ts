
import {BaseIfc} from "./BaseIfc"
import {IfcSurfaceTexture} from "./IfcSurfaceTexture"
import {IfcTessellatedFaceSet} from "./IfcTessellatedFaceSet"
import {IfcTextureVertexList} from "./IfcTextureVertexList"
import {IfcIndexedTriangleTextureMap} from "./IfcIndexedTriangleTextureMap"
import {IfcTextureCoordinate} from "./IfcTextureCoordinate"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcindexedtexturemap.htm
export abstract class IfcIndexedTextureMap extends IfcTextureCoordinate {
	MappedTo : IfcTessellatedFaceSet
	TexCoords : IfcTextureVertexList

    constructor(maps : Array<IfcSurfaceTexture>, mappedTo : IfcTessellatedFaceSet, texCoords : IfcTextureVertexList) {
        super(maps)

		this.MappedTo = mappedTo
		this.TexCoords = texCoords

    }
}