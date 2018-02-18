
import {BaseIfc} from "./BaseIfc"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcCartesianTransformationOperator2D} from "./IfcCartesianTransformationOperator2D.g"
import {IfcTextureCoordinate} from "./IfcTextureCoordinate.g"
import {IfcSurfaceStyleWithTextures} from "./IfcSurfaceStyleWithTextures.g"
import {IfcPresentationItem} from "./IfcPresentationItem.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacetexture.htm
 */
export abstract class IfcSurfaceTexture extends IfcPresentationItem {
	RepeatS : IfcBoolean
	RepeatT : IfcBoolean
	Mode : IfcIdentifier // optional
	TextureTransform : IfcCartesianTransformationOperator2D // optional
	Parameter : Array<IfcIdentifier> // optional
	IsMappedBy : Array<IfcTextureCoordinate> // inverse
	UsedInStyles : Array<IfcSurfaceStyleWithTextures> // inverse

    constructor(repeatS : IfcBoolean, repeatT : IfcBoolean) {
        super()
		this.RepeatS = repeatS
		this.RepeatT = repeatT

    }
}