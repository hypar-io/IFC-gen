
import {BaseIfc} from "./BaseIfc"
import {IfcSurfaceTexture} from "./IfcSurfaceTexture.g"
import {IfcTessellatedFaceSet} from "./IfcTessellatedFaceSet.g"
import {IfcTextureVertexList} from "./IfcTextureVertexList.g"
import {IfcPositiveInteger} from "./IfcPositiveInteger.g"
import {IfcIndexedTextureMap} from "./IfcIndexedTextureMap.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcindexedtriangletexturemap.htm
export class IfcIndexedTriangleTextureMap extends IfcIndexedTextureMap {
	TexCoordIndex : Array<Array<IfcPositiveInteger>>// optional

    constructor(maps : Array<IfcSurfaceTexture>, mappedTo : IfcTessellatedFaceSet, texCoords : IfcTextureVertexList) {
        super(maps,mappedTo,texCoords)
		this.TexCoordIndex = new Array<Array<IfcPositiveInteger>>()

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Maps != null ? this.toStepValue(this.Maps) : "$");
		parameters.push(this.MappedTo != null ? this.toStepValue(this.MappedTo) : "$");
		parameters.push(this.TexCoords != null ? this.toStepValue(this.TexCoords) : "$");
		parameters.push(this.TexCoordIndex != null ? this.toStepValue(this.TexCoordIndex) : "$");

        return parameters.join();
    }
}