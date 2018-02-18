
import {BaseIfc} from "./BaseIfc"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcCartesianTransformationOperator2D} from "./IfcCartesianTransformationOperator2D.g"
import {IfcTextureCoordinate} from "./IfcTextureCoordinate.g"
import {IfcSurfaceStyleWithTextures} from "./IfcSurfaceStyleWithTextures.g"
import {IfcBinary} from "./IfcBinary.g"
import {IfcSurfaceTexture} from "./IfcSurfaceTexture.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcblobtexture.htm
 */
export class IfcBlobTexture extends IfcSurfaceTexture {
	RasterFormat : IfcIdentifier
	RasterCode : IfcBinary

    constructor(repeatS : IfcBoolean, repeatT : IfcBoolean, rasterFormat : IfcIdentifier, rasterCode : IfcBinary) {
        super(repeatS,repeatT)

		this.RasterFormat = rasterFormat
		this.RasterCode = rasterCode

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(BaseIfc.toStepValue(this.RepeatS))
		parameters.push(BaseIfc.toStepValue(this.RepeatT))
		parameters.push(BaseIfc.toStepValue(this.Mode))
		parameters.push(BaseIfc.toStepValue(this.TextureTransform))
		parameters.push(BaseIfc.toStepValue(this.Parameter))
		parameters.push(BaseIfc.toStepValue(this.RasterFormat))
		parameters.push(BaseIfc.toStepValue(this.RasterCode))

        return parameters.join();
    }
}