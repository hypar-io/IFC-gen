
import {BaseIfc} from "./BaseIfc"
import {IfcBoolean} from "./IfcBoolean"
import {IfcIdentifier} from "./IfcIdentifier"
import {IfcCartesianTransformationOperator2D} from "./IfcCartesianTransformationOperator2D"
import {IfcTextureCoordinate} from "./IfcTextureCoordinate"
import {IfcSurfaceStyleWithTextures} from "./IfcSurfaceStyleWithTextures"
import {IfcBlobTexture} from "./IfcBlobTexture"
import {IfcImageTexture} from "./IfcImageTexture"
import {IfcPixelTexture} from "./IfcPixelTexture"
import {IfcPresentationItem} from "./IfcPresentationItem"

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