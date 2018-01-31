
import {BaseIfc} from "./BaseIfc"
import {IfcBoolean} from "./IfcBoolean"
import {IfcIdentifier} from "./IfcIdentifier"
import {IfcCartesianTransformationOperator2D} from "./IfcCartesianTransformationOperator2D"
import {IfcTextureCoordinate} from "./IfcTextureCoordinate"
import {IfcSurfaceStyleWithTextures} from "./IfcSurfaceStyleWithTextures"
import {IfcURIReference} from "./IfcURIReference"
import {IfcSurfaceTexture} from "./IfcSurfaceTexture"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcimagetexture.htm
export class IfcImageTexture extends IfcSurfaceTexture {
	URLReference : IfcURIReference

    constructor(repeatS : IfcBoolean, repeatT : IfcBoolean, uRLReference : IfcURIReference) {
        super(repeatS,repeatT)

		this.URLReference = uRLReference

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.RepeatS != null ? this.toStepValue(this.RepeatS) : "$");
		parameters.push(this.RepeatT != null ? this.toStepValue(this.RepeatT) : "$");
		parameters.push(this.Mode != null ? this.toStepValue(this.Mode) : "$");
		parameters.push(this.TextureTransform != null ? this.toStepValue(this.TextureTransform) : "$");
		parameters.push(this.Parameter != null ? this.toStepValue(this.Parameter) : "$");
		parameters.push(this.URLReference != null ? this.toStepValue(this.URLReference) : "$");

        return parameters.join();
    }
}