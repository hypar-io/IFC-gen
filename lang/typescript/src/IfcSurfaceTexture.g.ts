
import {BaseIfc} from "./BaseIfc"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcCartesianTransformationOperator2D} from "./IfcCartesianTransformationOperator2D.g"
import {IfcTextureCoordinate} from "./IfcTextureCoordinate.g"
import {IfcSurfaceStyleWithTextures} from "./IfcSurfaceStyleWithTextures.g"
import {IfcBlobTexture} from "./IfcBlobTexture.g"
import {IfcImageTexture} from "./IfcImageTexture.g"
import {IfcPixelTexture} from "./IfcPixelTexture.g"
import {IfcPresentationItem} from "./IfcPresentationItem.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacetexture.htm
export abstract class IfcSurfaceTexture extends IfcPresentationItem {
	RepeatS : IfcBoolean
	RepeatT : IfcBoolean
	Mode : IfcIdentifier// optional
	TextureTransform : IfcCartesianTransformationOperator2D// optional
	Parameter : Array<IfcIdentifier>// optional
	IsMappedBy : Array<IfcTextureCoordinate>// inverse
	UsedInStyles : Array<IfcSurfaceStyleWithTextures>// inverse

    constructor(repeatS : IfcBoolean, repeatT : IfcBoolean) {
        super()
		this.Parameter = new Array<IfcIdentifier>()
		this.IsMappedBy = new Array<IfcTextureCoordinate>()
		this.UsedInStyles = new Array<IfcSurfaceStyleWithTextures>()

		this.RepeatS = repeatS
		this.RepeatT = repeatT

    }
}