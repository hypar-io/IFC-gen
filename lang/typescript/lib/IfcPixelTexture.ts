
import {BaseIfc} from "./BaseIfc"
import {IfcBoolean} from "./IfcBoolean"
import {IfcIdentifier} from "./IfcIdentifier"
import {IfcCartesianTransformationOperator2D} from "./IfcCartesianTransformationOperator2D"
import {IfcTextureCoordinate} from "./IfcTextureCoordinate"
import {IfcSurfaceStyleWithTextures} from "./IfcSurfaceStyleWithTextures"
import {IfcInteger} from "./IfcInteger"
import {IfcBinary} from "./IfcBinary"
import {IfcSurfaceTexture} from "./IfcSurfaceTexture"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpixeltexture.htm
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
		parameters.push(this.RepeatS != null ? this.toStepValue(this.RepeatS) : "$");
		parameters.push(this.RepeatT != null ? this.toStepValue(this.RepeatT) : "$");
		parameters.push(this.Mode != null ? this.toStepValue(this.Mode) : "$");
		parameters.push(this.TextureTransform != null ? this.toStepValue(this.TextureTransform) : "$");
		parameters.push(this.Parameter != null ? this.toStepValue(this.Parameter) : "$");
		parameters.push(this.Width != null ? this.toStepValue(this.Width) : "$");
		parameters.push(this.Height != null ? this.toStepValue(this.Height) : "$");
		parameters.push(this.ColourComponents != null ? this.toStepValue(this.ColourComponents) : "$");
		parameters.push(this.Pixel != null ? this.toStepValue(this.Pixel) : "$");

        return parameters.join();
    }
}