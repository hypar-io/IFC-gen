
import {BaseIfc} from "./BaseIfc"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcCartesianTransformationOperator2D} from "./IfcCartesianTransformationOperator2D.g"
import {IfcTextureCoordinate} from "./IfcTextureCoordinate.g"
import {IfcSurfaceStyleWithTextures} from "./IfcSurfaceStyleWithTextures.g"
import {IfcInteger} from "./IfcInteger.g"
import {IfcBinary} from "./IfcBinary.g"
import {IfcSurfaceTexture} from "./IfcSurfaceTexture.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpixeltexture.htm
 */
export class IfcPixelTexture extends IfcSurfaceTexture {
	Width : IfcInteger
	Height : IfcInteger
	ColourComponents : IfcInteger
	Pixel : Array<IfcBinary>

    constructor(repeatS : IfcBoolean, repeatT : IfcBoolean, width : IfcInteger, height : IfcInteger, colourComponents : IfcInteger, pixel : Array<IfcBinary>) {
        super(repeatS,repeatT)

		this.Width = width
		this.Height = height
		this.ColourComponents = colourComponents
		this.Pixel = pixel

    }
    getStepParameters() : string {
            var parameters = new Array<string>();
    		parameters.push(BaseIfc.toStepValue(this.RepeatS))
		parameters.push(BaseIfc.toStepValue(this.RepeatT))
		parameters.push(BaseIfc.toStepValue(this.Mode))
		parameters.push(BaseIfc.toStepValue(this.TextureTransform))
		parameters.push(BaseIfc.toStepValue(this.Parameter))
		parameters.push(BaseIfc.toStepValue(this.Width))
		parameters.push(BaseIfc.toStepValue(this.Height))
		parameters.push(BaseIfc.toStepValue(this.ColourComponents))
		parameters.push(BaseIfc.toStepValue(this.Pixel))

            return parameters.join();
        }
}