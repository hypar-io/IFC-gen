
import {BaseIfc} from "./BaseIfc"
import {IfcSurfaceTexture} from "./IfcSurfaceTexture.g"
import {IfcTessellatedFaceSet} from "./IfcTessellatedFaceSet.g"
import {IfcTextureVertexList} from "./IfcTextureVertexList.g"
import {IfcTextureCoordinate} from "./IfcTextureCoordinate.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcindexedtexturemap.htm
 */
export abstract class IfcIndexedTextureMap extends IfcTextureCoordinate {
	MappedTo : IfcTessellatedFaceSet
	TexCoords : IfcTextureVertexList

    constructor(maps : Array<IfcSurfaceTexture>, mappedTo : IfcTessellatedFaceSet, texCoords : IfcTextureVertexList) {
        super(maps)
		this.MappedTo = mappedTo
		this.TexCoords = texCoords

    }
}