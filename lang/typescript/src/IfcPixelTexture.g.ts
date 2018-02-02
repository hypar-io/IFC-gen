
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
		parameters.push(this.RepeatS != null ? BaseIfc.toStepValue(this.RepeatS) : "$");
		parameters.push(this.RepeatT != null ? BaseIfc.toStepValue(this.RepeatT) : "$");
		parameters.push(this.Mode != null ? BaseIfc.toStepValue(this.Mode) : "$");
		parameters.push(this.TextureTransform != null ? BaseIfc.toStepValue(this.TextureTransform) : "$");
		parameters.push(this.Parameter != null ? BaseIfc.toStepValue(this.Parameter) : "$");
		parameters.push(this.Width != null ? BaseIfc.toStepValue(this.Width) : "$");
		parameters.push(this.Height != null ? BaseIfc.toStepValue(this.Height) : "$");
		parameters.push(this.ColourComponents != null ? BaseIfc.toStepValue(this.ColourComponents) : "$");
		parameters.push(this.Pixel != null ? BaseIfc.toStepValue(this.Pixel) : "$");

        return parameters.join();
    }
}