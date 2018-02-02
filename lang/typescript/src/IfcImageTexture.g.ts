
import {BaseIfc} from "./BaseIfc"
import {IfcBoolean} from "./IfcBoolean.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcCartesianTransformationOperator2D} from "./IfcCartesianTransformationOperator2D.g"
import {IfcTextureCoordinate} from "./IfcTextureCoordinate.g"
import {IfcSurfaceStyleWithTextures} from "./IfcSurfaceStyleWithTextures.g"
import {IfcURIReference} from "./IfcURIReference.g"
import {IfcSurfaceTexture} from "./IfcSurfaceTexture.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcimagetexture.htm
 */
export class IfcImageTexture extends IfcSurfaceTexture {
	URLReference : IfcURIReference

    constructor(repeatS : IfcBoolean, repeatT : IfcBoolean, uRLReference : IfcURIReference) {
        super(repeatS,repeatT)

		this.URLReference = uRLReference

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.RepeatS != null ? BaseIfc.toStepValue(this.RepeatS) : "$");
		parameters.push(this.RepeatT != null ? BaseIfc.toStepValue(this.RepeatT) : "$");
		parameters.push(this.Mode != null ? BaseIfc.toStepValue(this.Mode) : "$");
		parameters.push(this.TextureTransform != null ? BaseIfc.toStepValue(this.TextureTransform) : "$");
		parameters.push(this.Parameter != null ? BaseIfc.toStepValue(this.Parameter) : "$");
		parameters.push(this.URLReference != null ? BaseIfc.toStepValue(this.URLReference) : "$");

        return parameters.join();
    }
}