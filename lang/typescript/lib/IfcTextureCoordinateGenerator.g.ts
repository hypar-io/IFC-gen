
import {BaseIfc} from "./BaseIfc"
import {IfcSurfaceTexture} from "./IfcSurfaceTexture.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcReal} from "./IfcReal.g"
import {IfcTextureCoordinate} from "./IfcTextureCoordinate.g"

// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctexturecoordinategenerator.htm
export class IfcTextureCoordinateGenerator extends IfcTextureCoordinate {
	Mode : IfcLabel
	Parameter : Array<IfcReal>// optional

    constructor(maps : Array<IfcSurfaceTexture>, mode : IfcLabel) {
        super(maps)
		this.Parameter = new Array<IfcReal>()

		this.Mode = mode

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.Maps != null ? this.toStepValue(this.Maps) : "$");
		parameters.push(this.Mode != null ? this.toStepValue(this.Mode) : "$");
		parameters.push(this.Parameter != null ? this.toStepValue(this.Parameter) : "$");

        return parameters.join();
    }
}