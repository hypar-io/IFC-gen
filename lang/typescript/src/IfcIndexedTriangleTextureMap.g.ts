
import {BaseIfc} from "./BaseIfc"
import {IfcSurfaceTexture} from "./IfcSurfaceTexture.g"
import {IfcTessellatedFaceSet} from "./IfcTessellatedFaceSet.g"
import {IfcTextureVertexList} from "./IfcTextureVertexList.g"
import {IfcPositiveInteger} from "./IfcPositiveInteger.g"
import {IfcIndexedTextureMap} from "./IfcIndexedTextureMap.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcindexedtriangletexturemap.htm
 */
export class IfcIndexedTriangleTextureMap extends IfcIndexedTextureMap {
	TexCoordIndex : Array<Array<IfcPositiveInteger>> // optional

    constructor(maps : Array<IfcSurfaceTexture>, mappedTo : IfcTessellatedFaceSet, texCoords : IfcTextureVertexList) {
        super(maps,mappedTo,texCoords)
    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.Maps))
		parameters.push(BaseIfc.toStepValue(this.MappedTo))
		parameters.push(BaseIfc.toStepValue(this.TexCoords))
		parameters.push(BaseIfc.toStepValue(this.TexCoordIndex))

        return parameters.join();
    }
}